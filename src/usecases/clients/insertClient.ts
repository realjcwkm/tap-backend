import { AppDataSource } from './../../AppDataSource';
import { Client } from '../../entities/Client';

interface IDataClient {
	nameClient: string;
	cpfClient: string;
}

async function insertClient(dataClient: IDataClient) {
	try {
		const clientRepository = AppDataSource.getRepository(Client);

		const client: IDataClient = dataClient;

		const result = await clientRepository.save(client);
		
		return result;
	} catch (error) {
		console.error('Erro ao persistir o cliente ' + error);
		return undefined;
	}
}

export { insertClient };
