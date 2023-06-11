import { AppDataSource } from './../../AppDataSource';
import { Employee } from '../../entities/Employee';

interface IDataEmployee {
	nameEmployee: string;
	salaryEmployee: number;
}

async function insertEmployee(dataEmployee: IDataEmployee) {
	try {
		const employeeRepository = AppDataSource.getRepository(Employee);

		const employee: IDataEmployee = dataEmployee;

		return employeeRepository.save(employee);
	} catch (error) {
		console.error('Erro ao persistir o Employee ' + error);
		return undefined;
	}
}

export { insertEmployee };
