import { Order } from './Order';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
	@PrimaryGeneratedColumn()
		idEmployee: number;

	@Column()
		nameEmployee: string;

	@Column({ type: 'decimal', precision: 5, scale: 2 })
		salaryEmployee: number;

	@OneToOne(() => Order, (order) => order.employee)
		order: Order;
}
