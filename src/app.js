import express from 'express'
import employeesRoutes from './routes/employees.routes.js' //employeesRoutes can be any name, thanks to export default in employees.routes.js file
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json()) //Need for parse req body to JSON format, therefore my app undestand de data send from clien

app.use('/api', indexRoutes)
app.use('/api/',employeesRoutes)

app.use((req,res,express) => {
    res.status(404).json({
        Message: "end point no foud"
    })
})

export default app