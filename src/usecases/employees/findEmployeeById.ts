import { AppDataSource } from '../../AppDataSource';
import { Employee } from '../../entities/Employee';

async function findEmployeeById(idEmployee : number) {
	const employeeRepository = AppDataSource.getRepository(Employee);

	try {
		const employee = await employeeRepository.findOneBy({
			idEmployee
		});

		return employee;
	} catch (error) {
		console.error('Erro no findEmployeeById ' + error);
		return undefined;
	}
}

export { findEmployeeById };
