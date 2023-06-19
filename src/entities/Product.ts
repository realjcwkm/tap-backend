import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderDetails } from './OrderDetails';

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
		idProduct: number;

	@Column()
		nameProduct: string;
	
	@Column({ nullable: true })
		descProduct: string;

	@Column({ type: 'decimal', precision: 7, scale: 2 })
		valueUnitProduct: number;

	@Column()
		countProduct: number;

	@OneToMany(() => OrderDetails, orderDetails => orderDetails.product, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
		orderDetails: OrderDetails[];
}
