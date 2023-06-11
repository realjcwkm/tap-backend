import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';
@Entity()
export class Client {
	@PrimaryGeneratedColumn()
		idClient: number;

	@Column()
		nameClient: string;

	@Column()
		cpfClient: string;

	@OneToOne(() => Order, (order) => order.client)
		order: Order;
}
