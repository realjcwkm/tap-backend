import { Order } from './Order';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
	@PrimaryGeneratedColumn()
		idEmployee: number;

	@Column()
		nameEmployee: string;

	@Column({ type: 'decimal', precision: 7, scale: 2 })
		salaryEmployee: number;

	@OneToMany(() => Order, (order) => order.employee)
		order: Order[];
}
