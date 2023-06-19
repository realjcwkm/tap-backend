import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';

@Entity()
export class Client {
	@PrimaryGeneratedColumn()
		idClient: number;

	@Column()
		nameClient: string;

	@Column()
		cpfClient: string;

	@OneToMany(() => Order, (order) => order.client)
		order: Order[];
}
