import { AppDataSource } from '../../AppDataSource';
import { Client } from '../../entities/Client';
import { findClientById } from './findClientById';

async function removeClient(idClient : number) {
	const clientRepository = AppDataSource.getRepository(Client);

	try {
		const client = await findClientById(idClient);

		if (client)
			await clientRepository.delete(client);

		return client;
	} catch (error) {
		console.error('Erro no removeClient ' + error);
		return undefined;
	}
}

export { removeClient };
