import { Router } from 'express';
import { createProduct, getProducts, updateProduct, getProduct, deleteProduct } from '../controllers/productController';

const productsRouter = Router();

productsRouter.get('/products', getProducts);
productsRouter.get('/product/:id', getProduct);
productsRouter.post('/product', createProduct);
productsRouter.put('/product/:id', updateProduct);
productsRouter.delete('/product/:id', deleteProduct);
//Adicionar as outras rotas posteriormente

export { productsRouter };