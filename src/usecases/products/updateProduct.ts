import { AppDataSource } from '../../AppDataSource';
import { Product } from '../../entities/Product';

interface IDataProduct {
	idProduct?: number,
	nameProduct: string,
	descProduct?: string,
	valueUnitProduct: number,
	countProduct: number
}

async function updateProduct(product: IDataProduct) {
	try {
		const productRepository = AppDataSource.getRepository(Product);

		const productExist = await productRepository.findOneBy({
			idProduct: product.idProduct,
		});

		if(productExist === null){
			return null;
		}

		productExist.nameProduct = product.nameProduct;
		if(product.descProduct)
			productExist.descProduct = product.descProduct;
			
		productExist.valueUnitProduct = product.valueUnitProduct;
		productExist.countProduct = product.countProduct;

		await productRepository.save(productExist);
		
		return productExist;

	} catch (error) {
		console.error('Erro ao atualizar Product ' + error);
		return undefined;
	}
}

export { updateProduct };
