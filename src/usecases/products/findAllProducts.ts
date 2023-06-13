import { AppDataSource } from '../../AppDataSource';
import { Product } from '../../entities/Product';

async function findAllProducts() {
	const productRepository = AppDataSource.getRepository(Product);

	try {
		const products = await productRepository.find();

		return products;
	} catch (error) {
		console.error('Erro no findAllProducts ' + error);
		return undefined;
	}
}

export { findAllProducts };
