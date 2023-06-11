import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
		idProduct: number;

	@Column()
		nameProduct: string;
	
	@Column({ nullable: true })
		descProduct: string;

	@Column({ type: 'decimal', precision: 5, scale: 2 })
		valueUnitProduct: number;

	@Column()
		countProduct: number;
}
