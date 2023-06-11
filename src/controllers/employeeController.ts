import { Request, Response } from 'express';
import { findAllEmployees } from '../usecases/employees/findAllEmployees';

async function getEmployees(req: Request, res: Response) {
	const employees = await findAllEmployees();

	if (employees) return res.send(employees);

	return res.status(404).send({
		Error: 'Unable to find all employees',
		status: 404,
	});
}

export { getEmployees };