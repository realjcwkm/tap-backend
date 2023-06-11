import { AppDataSource } from '../../AppDataSource';
import { Product } from '../../entities/Product';

async function findProductById(idProduct : number) {
	const productRepository = AppDataSource.getRepository(Product);

	try {
		const product = await productRepository.findOneBy({
			idProduct
		});

		return product;
	} catch (error) {
		console.error('Erro no findProductById ' + error);
		return undefined;
	}
}

export { findProductById };
