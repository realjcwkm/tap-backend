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

		const result = await employeeRepository.save(employee);

		return result;
	} catch (error) {
		console.error('Erro ao persistir o Employee\n' + error);
		return undefined;
	}
}

export { insertEmployee };
