import { AppDataSource } from './../../AppDataSource';
import { Product } from '../../entities/Product';

interface IDataProduct {
	nameProduct: string,
	descProduct?: string,
	valueUnitProduct: number,
	countProduct: number
}

async function insertProduct(dataProduct: IDataProduct) {
	try {
		const productRepository = AppDataSource.getRepository(Product);

		const product: IDataProduct = dataProduct;

		const result = await productRepository.save(product);

		return result;
	} catch (error) {
		console.error('Erro ao persistir o Product\n' + error);
		return undefined;
	}
}

export { insertProduct };
