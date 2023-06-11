import { AppDataSource } from '../../AppDataSource';
import { Client } from '../../entities/Client';

async function findAllClients() {
	const clientRepository = AppDataSource.getRepository(Client);

	try {
		const clients = await clientRepository.find();

		return clients;
	} catch (error) {
		console.error('Erro no findAllClients ' + error);
		return undefined;
	}
}

export { findAllClients };
