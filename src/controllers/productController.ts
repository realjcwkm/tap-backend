import { Request, Response } from 'express';
import { findAllProducts } from '../usecases/products/findAllProducts';
import { insertProduct } from '../usecases/products/insertProduct';
import { updateProduct as productUpdate } from '../usecases/products/updateProduct';
import { findProductById } from '../usecases/products/findProductById';
import { removeProduct } from '../usecases/products/removeProduct';

async function getProducts(req: Request, res: Response) {
	const products = await findAllProducts();

	if (products) return res.send(products);

	return res.status(404).send({
		Error: 'Unable to find all products',
		status: 404,
	});
}

interface IDataProduct {
	idProduct?: number,
	nameProduct: string,
	descProduct?: string,
	valueUnitProduct: number,
	countProduct: number
}

async function createProduct(req: Request, res: Response) {
	const dataProduct: IDataProduct = req.body;

	const result = await insertProduct(dataProduct);

	if(result)
		return res.status(201).send(result);
	
	return res.status(404).send({});
}

async function updateProduct(req: Request, res: Response){
	console.log(req.params.id);

	const dataProduct: IDataProduct = req.body;
	dataProduct.idProduct = Number(req.params.id);

	const result = await productUpdate(dataProduct);

	if(result)
		return res.send('Producte atualizado');

	return res.status(404).send('Erro ao atualizar');
}

async function getProduct(req: Request, res: Response) {
	const idProduct = Number(req.params.id);

	const product = await findProductById(idProduct);

	if (product) return res.send(product);

	return res.status(404).send({
		Error: 'Unable to find product by id',
		status: 404,
	});
}

async function deleteProduct(req: Request, res: Response) {
	const idProduct = Number(req.params.id);

	const product = await removeProduct(idProduct);

	if (product) return res.send(product);

	return res.status(404).send({
		Error: 'Unable to find product by id',
		status: 404,
	});
}

export { getProducts, createProduct, updateProduct, getProduct, deleteProduct };
