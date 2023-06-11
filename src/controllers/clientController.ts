import { Request, Response } from 'express';
import { findAllClients } from '../usecases/clients/findAllClients';
import { insertClient } from '../usecases/clients/insertClient';
import { updateClient as clientUpdate } from '../usecases/clients/updateClient';

async function getClients(req: Request, res: Response) {
	const clients = await findAllClients();

	if (clients) return res.send(clients);

	return res.status(404).send({
		Error: 'Unable to find all clients',
		status: 404,
	});
}

interface IDataClient {
	idClient?: number,
	nameClient: string,
	cpfClient: string,
}

async function createClient(req: Request, res: Response) {
	const dataClient: IDataClient = req.body;

	const result = await insertClient(dataClient);

	if(result)
		return res.status(201).send(result);
	
	return res.status(404).send({});
}

async function updateClient(req: Request, res: Response){
	console.log(req.params.id);

	const dataClient: IDataClient = req.body;
	dataClient.idClient = Number(req.params.id);

	const result = await clientUpdate(dataClient);

	if(result)
		return res.send('Cliente atualizado');

	return res.status(404).send('Erro ao atualizar');
}

export { getClients, createClient, updateClient };
