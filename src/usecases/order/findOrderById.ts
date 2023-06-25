import { AppDataSource } from '../../AppDataSource';
import { Order } from '../../entities/Order';

async function findOrderById(idOrder : number) {
	const orderRepository = AppDataSource.getRepository(Order);

	try {
		const order = await orderRepository.findOneBy({
			idOrder
		});

		return order;
	} catch (error) {
		console.error('Erro no findOrderById ' + error);
		return undefined;
	}
}

export { findOrderById };
