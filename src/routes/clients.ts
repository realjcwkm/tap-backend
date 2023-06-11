import { Router } from 'express';
import { createClient, getClients, updateClient, getClient } from '../controllers/clientController';

const clientsRouter = Router();

clientsRouter.get('/clients', getClients);
clientsRouter.get('/client/:id', getClient);
clientsRouter.post('/client', createClient);
clientsRouter.put('/client/:id', updateClient);
//Adicionar as outras rotas posteriormente

export { clientsRouter };