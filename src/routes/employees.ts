import { Router } from 'express';
import { createEmployee, getEmployees, updateEmployee, getEmployee, deleteEmployee } from '../controllers/employeeController';

const employeesRouter = Router();

employeesRouter.get('/employees', getEmployees);
employeesRouter.get('/employee/:id', getEmployee);
employeesRouter.post('/employee', createEmployee);
employeesRouter.put('/employee/:id', updateEmployee);
employeesRouter.delete('/employee/:id', deleteEmployee);
//Adicionar as outras rotas posteriormente

export { employeesRouter };