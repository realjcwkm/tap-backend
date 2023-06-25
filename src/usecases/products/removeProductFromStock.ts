import { AppDataSource } from '../../AppDataSource';
import { Product } from '../../entities/Product';
import { findProductById } from './findProductById';


async function removeProductFromStock(product: Product, countProduct: number) {
	const productRepository = AppDataSource.getRepository(Product);

	try {
		const productInStock = await findProductById(product.idProduct);

		if(productInStock){
			if((productInStock?.countProduct - countProduct) >= 0){
				productInStock.countProduct -= countProduct;
				await productRepository.save(productInStock);
	
				return true;
			}
		}

		return false;
	} catch (error) {
		console.error('Erro no findProductInStock ' + error);
		return undefined;
	}
}

export { removeProductFromStock };
