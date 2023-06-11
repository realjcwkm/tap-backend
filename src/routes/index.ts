import { Router } from 'express';
import { clientsRouter } from './clients';
import { employeesRouter } from './employees';
import { productsRouter } from './products';

const router = Router();

router.use(clientsRouter);
router.use(employeesRouter);
router.use(productsRouter);

export { router };