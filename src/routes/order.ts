import { Router } from 'express';
import { createOrder, createOrderDetails } from '../controllers/orderController';

const orderRouter = Router();

orderRouter.post('/order', createOrder);
orderRouter.post('/order/:id', createOrderDetails);
//Adicionar as outras rotas posteriormente

export { orderRouter };