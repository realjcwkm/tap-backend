import { AppDataSource } from '../../AppDataSource';
import { Client } from '../../entities/Client';
import { Employee } from '../../entities/Employee';
import { Order } from '../../entities/Order';

interface IOrderData{
	client: Client,
	employee: Employee,
	datePurchase?: string,
}

async function insertOrder(orderData: IOrderData) {
	
	try {
		const orderRepository = AppDataSource.getRepository(Order);

		const newOrder = {
			client: orderData.client,
			employee: orderData.employee,
			datePurchase: orderData.datePurchase
		};

		await orderRepository.save(newOrder);	

		return newOrder;
	} catch (error) {
		console.error('Erro ao criar pedido\n' + error);
		console.log(error);
		return undefined;
	}
}

export { insertOrder };