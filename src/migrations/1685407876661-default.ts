/* eslint-disable quotes */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Default1685407876661 implements MigrationInterface {
	name = 'Default1685407876661';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`employee\` (\`idEmployee\` int NOT NULL AUTO_INCREMENT, \`nameEmployee\` varchar(255) NOT NULL, \`salaryEmployee\` decimal(5,2) NOT NULL, PRIMARY KEY (\`idEmployee\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`order\` (\`idOrder\` int NOT NULL AUTO_INCREMENT, \`datePurchase\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`clientIdClient\` int NULL, \`employeeIdEmployee\` int NULL, UNIQUE INDEX \`REL_2936682a6f483cffcd6edbae8a\` (\`clientIdClient\`), UNIQUE INDEX \`REL_2047bac56abbc37da219b9b283\` (\`employeeIdEmployee\`), PRIMARY KEY (\`idOrder\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`client\` (\`idClient\` int NOT NULL AUTO_INCREMENT, \`nameClient\` varchar(255) NOT NULL, \`cpfClient\` varchar(255) NOT NULL, PRIMARY KEY (\`idClient\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`product\` (\`idProduct\` int NOT NULL AUTO_INCREMENT, \`nameProduct\` varchar(255) NOT NULL, \`descProduct\` varchar(255) NULL, \`valueUnitProduct\` decimal(5,2) NOT NULL, \`countProduct\` int NOT NULL, PRIMARY KEY (\`idProduct\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_2936682a6f483cffcd6edbae8a7\` FOREIGN KEY (\`clientIdClient\`) REFERENCES \`client\`(\`idClient\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_2047bac56abbc37da219b9b2838\` FOREIGN KEY (\`employeeIdEmployee\`) REFERENCES \`employee\`(\`idEmployee\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_2047bac56abbc37da219b9b2838\``
		);
		await queryRunner.query(
			`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_2936682a6f483cffcd6edbae8a7\``
		);
		await queryRunner.query(`DROP TABLE \`product\``);
		await queryRunner.query(`DROP TABLE \`client\``);
		await queryRunner.query(
			`DROP INDEX \`REL_2047bac56abbc37da219b9b283\` ON \`order\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_2936682a6f483cffcd6edbae8a\` ON \`order\``
		);
		await queryRunner.query(`DROP TABLE \`order\``);
		await queryRunner.query(`DROP TABLE \`employee\``);
	}
}
