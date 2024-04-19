import {Router} from "express";
import { getEmployees,postEmployees,putEmployees,patchEmployees,deleteEmployees,getEmployeId } from "../controllers/employees.controllers.js";


//import { getEmployeId } from "../controllers/employees.controllers.js";

const router = Router();


router.get('/employees/:id', getEmployeId)
router.delete('/employees/:id', deleteEmployees)
router.patch('/employees/:id', patchEmployees)

router.route('/employees')
    .get(getEmployees)
    .post(postEmployees)
    .put(putEmployees)
    .delete(deleteEmployees);

export default router






/*
router.post('/employees', (req,res) => {
    res.send('post employees')
})
 
router.put('/employees', (req,res) => {
    res.send('put employees')
})

router.delete('/employees', (req,res) => {
    res.send('delete employees')
})
*/