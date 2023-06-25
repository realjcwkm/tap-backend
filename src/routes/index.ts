import { Router } from 'express';
import { clientsRouter } from './clients';
import { employeesRouter } from './employees';
import { productsRouter } from './products';
import { orderRouter } from './order';
import { errorHandler } from '../errors/errorHandler ';

const router = Router();

router.use(clientsRouter);
router.use(employeesRouter);
router.use(productsRouter);

router.use(orderRouter);

router.use(errorHandler);

export { router };