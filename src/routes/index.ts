import { Router } from 'express';
import { clientsRouter } from './clients';
import { employeesRouter } from './employees';
import { productsRouter } from './products';
import { orderRouter } from './order';

const router = Router();

router.use(clientsRouter);
router.use(employeesRouter);
router.use(productsRouter);

router.use(orderRouter);

export { router };