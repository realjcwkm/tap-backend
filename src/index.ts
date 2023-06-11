import express from 'express';
import { router } from './routes';
import { AppDataSource } from './AppDataSource';

const app = express();

AppDataSource.initialize()
	.then(() => {
		app.use(express.json());
		
		app.use(router);
		
		app.listen(3333, () => {
			console.log('servidor aberto na porta 3333');
		});
	})
	.catch((error) => console.error(error));
