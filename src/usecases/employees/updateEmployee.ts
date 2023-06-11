import { AppDataSource } from '../../AppDataSource';
import { Employee } from '../../entities/Employee';

interface IDataEmployee {
	idEmployee?: number;
	nameEmployee: string;
	salaryEmployee: number;
}

async function updateEmployee(employee: IDataEmployee) {
	try {
		const employeeRepository = AppDataSource.getRepository(Employee);

		const employeeExist = await employeeRepository.findOneBy({
			idEmployee: employee.idEmployee,
		});

		if(employeeExist === null){
			return null;
		}

		employeeExist.nameEmployee = employee.nameEmployee;
		employeeExist.salaryEmployee = employee.salaryEmployee;

		await employeeRepository.save(employeeExist);
		
		return employeeExist;

	} catch (error) {
		console.error('Erro ao atualizar Employeee ' + error);
		return undefined;
	}
}

export { updateEmployee };
