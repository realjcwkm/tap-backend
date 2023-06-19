import { OrderDetails } from './OrderDetails';
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from './Client';
import { Employee } from './Employee';

@Entity()
export class Order {
	@PrimaryGeneratedColumn()
		idOrder: number;

	@ManyToOne(() => Client, (client) => client.order, {
		nullable: false,
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	@JoinColumn({ name: 'idClient' })
		client: Client;

	@ManyToOne(() => Employee, (employee) => employee.order, {
		nullable: false,
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	@JoinColumn({ name: 'idEmployee' })
		employee: Employee;

	@Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
		datePurchase: string;

	@OneToMany(() => OrderDetails, orderDetails => orderDetails.order, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
		orderDetails: OrderDetails[];
}
