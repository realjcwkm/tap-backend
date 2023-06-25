import { AppDataSource } from '../../AppDataSource';
import { Order } from '../../entities/Order';
import { OrderDetails } from '../../entities/OrderDetails';
import { Product } from '../../entities/Product';
import { removeProductFromStock } from '../products/removeProductFromStock';

interface IOrderDetails{
	product: Product,
	countOrderDetails: number,
}

async function insertOrderDetails(order: Order, productsOrderDetails: IOrderDetails[]) {
	let commited = true;

	const queryRunner = AppDataSource.createQueryRunner();
	await queryRunner.startTransaction();
	try {
		const orderDetailsRepository = AppDataSource.getRepository(OrderDetails);

		for(let i = 0; i < productsOrderDetails.length; i++){
			const result = await removeProductFromStock(productsOrderDetails[i].product, productsOrderDetails[i].countOrderDetails);
			
			if(!result){
				throw new Error;
			}

			const newOrderDetails: OrderDetails = new OrderDetails();
			newOrderDetails.order = order;
			newOrderDetails.countOrderDetails = productsOrderDetails[i].countOrderDetails;
			newOrderDetails.product = productsOrderDetails[i].product;
			newOrderDetails.valueUnitOrderDetails = productsOrderDetails[i].product.valueUnitProduct;
			orderDetailsRepository.save(newOrderDetails);
		}

		await queryRunner.commitTransaction();
		
	} catch (error) {
		commited = false;
		await queryRunner.rollbackTransaction();
	} finally{
		await queryRunner.release();
	}

	return commited;
}

export { insertOrderDetails };