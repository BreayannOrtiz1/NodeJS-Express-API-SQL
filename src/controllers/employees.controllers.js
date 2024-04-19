import { pool } from "../db.js"


export const getEmployees = async function(req, res) {
    const id = req.body.id
    try {
        const [qgetEmplo] = await pool.query('SELECT * FROM employee') //WHERE id=(?)', [id]
        res.send(qgetEmplo)
    } catch (error) {
        res.status(500).json({
            message: "Error form DB, cannot connect to DB"
        })
    }
}

export const getEmployeId = async function(req, res) {
    const id = req.params.id
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id=(?)', [id]) //WHERE id=(?)', [id]
    
    if (rows.length == 0) {
        return res.status(404).json({message: "Employee not found"})
    }
    res.json(rows[0])
    } catch (error) {
        res.status(500).json({
            message: "Error form DB, cannot connect to DB"
        })
    }
}

export const postEmployees = async function(req, res) { //CREATE
    console.log(req.body)
    const {name, salary} = req.body // Data from client, maybe make a verification if data send is correct...
    //Store only row from respon of query
    try {
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary,
        })
    } catch (error) {
        res.status(500).json({
            message: "Error form DB, cannot connect to DB"
        })
    }
}

export const putEmployees = async function(req, res) {
    try {
        res.json({
            message: "PUT"
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error form DB, cannot connect to DB"
        })
    }
}

export const patchEmployees = async function(req, res) {
    const {id} = req.params
    const {name, salary} = req.body
    try {
        const [putQ] = await pool.query('UPDATE employee SET name=IFNULL(?, name), salary=IFNULL(?, salary) WHERE id=?', [name, salary, id])
        console.log(putQ)
        if (putQ.affectedRows <= 0) {
            return res.status(404).json({message: "Employee not found"})
        }
        res.json({message: `employee ${id} updated`})
    } catch (error) {
        res.status(500).json({
            message: "Error form DB, cannot connect to DB"
        })
    }

}


export const deleteEmployees = async function(req, res) {
    const id = req.params.id
    try {
        const resQuery = await pool.query('DELETE FROM employee WHERE id=?',id)

        if (resQuery[0].affectedRows == 0) {
            return res.status(404).json({message: "Employee not found"})
        }

        res.json({message:`employee ${id} deleted`}) //{message:`employee ${id} deleted`}
        //res.sendStatus(204)
    } catch (error) {
        res.status(500).json({
            message: "Error form DB, cannot connect to DB"
        })
    }
} 