import { AppDataSource } from '../../AppDataSource';
import { Client } from '../../entities/Client';

async function findClientById(idClient : number) {
	const clientRepository = AppDataSource.getRepository(Client);

	try {
		const client = await clientRepository.findOneBy({
			idClient
		});

		return client;
	} catch (error) {
		console.error('Erro no findClientById ' + error);
		return undefined;
	}
}

export { findClientById };
