import { Router } from 'express';
import { createClient, getClients, updateClient } from '../controllers/clientController';

const clientsRouter = Router();

clientsRouter.get('/clients', getClients);
clientsRouter.post('/client', createClient);
clientsRouter.put('/client/:id', updateClient);
//Adicionar as outras rotas posteriormente

export { clientsRouter };