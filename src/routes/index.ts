import { Router } from 'express';
import { clientsRouter } from './clients';
import { employeesRouter } from './employees';

const router = Router();

router.use(clientsRouter);
router.use(employeesRouter);

export { router };