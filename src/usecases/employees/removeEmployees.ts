import { Employee } from './../../entities/Employee';
import { AppDataSource } from '../../AppDataSource';
import { findEmployeeById } from './findEmployeeById';

async function removeEmployee(idEmployee : number) {
	const employeeRepository = AppDataSource.getRepository(Employee);

	try {
		const employee = await findEmployeeById(idEmployee);

		if (employee)
			await employeeRepository.delete(employee);

		return employee;
	} catch (error) {
		console.error('Erro no removeEmployee ' + error);
		return undefined;
	}
}

export { removeEmployee };
