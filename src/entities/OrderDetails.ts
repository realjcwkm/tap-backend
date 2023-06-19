import { Order } from './Order';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product';

@Entity()
export class OrderDetails{
	@PrimaryGeneratedColumn()
		idOrderDetails: number;
	
	@Column()	
		countOrderDetails: number;

	@Column()
		valueUnitOrderDetails: number;

	@ManyToOne(() => Order, (order) => order.orderDetails, {
		nullable: false,
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	@JoinColumn({name: 'idOrder'})
		order: Order;

	@ManyToOne(() => Product, (product) => product.orderDetails, {
		nullable: false,
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	@JoinColumn({name: 'idProduct'})
		product: Product;

}