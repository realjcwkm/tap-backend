import { Router } from 'express';

const orderRouter = Router();

orderRouter.post('/order', (req, res) => {
	return res.send('Hello world');
});
//Adicionar as outras rotas posteriormente

export { orderRouter };