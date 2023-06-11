import { Request, Response } from 'express';
import { findAllEmployees } from '../usecases/employees/findAllEmployees';
import { insertEmployee } from '../usecases/employees/insertEmployee';

async function getEmployees(req: Request, res: Response) {
	const employees = await findAllEmployees();

	if (employees) return res.send(employees);

	return res.status(404).send({
		Error: 'Unable to find all employees',
		status: 404,
	});
}

interface IDataEmployee {
	idEmployee?: number,
	nameEmployee: string,
	salaryEmployee: number,
}

async function createEmployee(req: Request, res: Response) {
	const dataEmployee: IDataEmployee = req.body;

	const result = await insertEmployee(dataEmployee);

	if(result)
		return res.status(201).send(result);
	
	return res.status(404).send({});
}

export { getEmployees, createEmployee };