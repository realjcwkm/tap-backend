import { Router } from 'express';
import { createEmployee, getEmployees, updateEmployee } from '../controllers/employeeController';

const employeesRouter = Router();

employeesRouter.get('/employees', getEmployees);
//employeesRouter.get('/employee/:id', getEmployee);
employeesRouter.post('/employee', createEmployee);
employeesRouter.put('/employee/:id', updateEmployee);
//Adicionar as outras rotas posteriormente

export { employeesRouter };