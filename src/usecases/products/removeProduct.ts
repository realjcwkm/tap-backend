import { Product } from './../../entities/Product';
import { AppDataSource } from '../../AppDataSource';
import { findProductById } from './findProductById';

async function removeProduct(idProduct : number) {
	const productRepository = AppDataSource.getRepository(Product);

	try {
		const product = await findProductById(idProduct);

		if (product)
			await productRepository.delete(product);

		return product;
	} catch (error) {
		console.error('Erro no removeProduct ' + error);
		return undefined;
	}
}

export { removeProduct };
