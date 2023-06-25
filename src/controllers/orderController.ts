import { Request, Response } from 'express';
import { findClientById } from '../usecases/clients/findClientById';
import { findEmployeeById } from '../usecases/employees/findEmployeeById';
import { findProductById } from '../usecases/products/findProductById';
import { insertOrder } from '../usecases/order/insertOrder';
import { findOrderById } from '../usecases/order/findOrderById';
import { insertOrderDetails } from '../usecases/order/insertOrderDetails';

interface IDataOrder{
	idClient: number,
	idEmployee: number,
	datePurchase?: string,
}


async function createOrder(req: Request, res: Response) {
	const dataOrder: IDataOrder = req.body;

	const client = await findClientById(dataOrder.idClient);
	if( !client ){
		return res.status(404).send({
			Error: 'Client does not exist',
			status: 404,
		});
	}
	
	const employee = await findEmployeeById(dataOrder.idEmployee);
	if( !employee ){
		return res.status(404).send({
			Error: 'Employee does not exist',
			status: 404,
		});
	}

	const orderDataCreate = {
		client,
		employee,
		datePurchase: dataOrder.datePurchase
	};

	const result = await insertOrder(orderDataCreate);

	return res.send(result);
}

interface IOrderDetails{
	idProduct: number,
	countProduct: number,
}

async function createOrderDetails(req: Request, res: Response) {
	const idOrder = Number(req.params.id);

	const order = await findOrderById(idOrder);

	if(!order){
		return res.status(404).send({
			Error: 'Order does not exist',
			status: 404,
		});
	}

	const orderDetails: IOrderDetails[] = req.body.orderDetails;

	const productList = [];
	for(let i = 0; i < orderDetails.length; i++){
		const idProductOrder = orderDetails[i].idProduct;
		const product = await findProductById(idProductOrder);

		if(!product)
			return res.status(404).send({
				Error: `Product with ID ${idProductOrder} does not exist`,
				status: 404,
			});
		productList.push({product, countOrderDetails: orderDetails[i].countProduct});
	}

	const result = await insertOrderDetails(order, productList);

	if(result){
		return res.status(201).send({
			message: 'Order details created with successfull',
		});
	}

	return res.status(404).send({
		Error: 'Order details does not created',
		status: 404,
	});
}

export { createOrder, createOrderDetails };