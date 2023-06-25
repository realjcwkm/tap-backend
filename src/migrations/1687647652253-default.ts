import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687647652253 implements MigrationInterface {
    name = 'Default1687647652253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product\` (\`idProduct\` int NOT NULL AUTO_INCREMENT, \`nameProduct\` varchar(255) NOT NULL, \`descProduct\` varchar(255) NULL, \`valueUnitProduct\` decimal(7,2) NOT NULL, \`countProduct\` int NOT NULL, PRIMARY KEY (\`idProduct\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_details\` (\`idOrderDetails\` int NOT NULL AUTO_INCREMENT, \`countOrderDetails\` int NOT NULL, \`valueUnitOrderDetails\` int NOT NULL, \`idOrder\` int NOT NULL, \`idProduct\` int NOT NULL, PRIMARY KEY (\`idOrderDetails\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee\` (\`idEmployee\` int NOT NULL AUTO_INCREMENT, \`nameEmployee\` varchar(255) NOT NULL, \`salaryEmployee\` decimal(7,2) NOT NULL, PRIMARY KEY (\`idEmployee\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order\` (\`idOrder\` int NOT NULL AUTO_INCREMENT, \`datePurchase\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`idClient\` int NOT NULL, \`idEmployee\` int NOT NULL, PRIMARY KEY (\`idOrder\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`client\` (\`idClient\` int NOT NULL AUTO_INCREMENT, \`nameClient\` varchar(255) NOT NULL, \`cpfClient\` varchar(255) NOT NULL, PRIMARY KEY (\`idClient\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`order_details\` ADD CONSTRAINT \`FK_adc0788e0783449f80387920ed9\` FOREIGN KEY (\`idOrder\`) REFERENCES \`order\`(\`idOrder\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`order_details\` ADD CONSTRAINT \`FK_3f45e5f0c6b43aec31bf69bbe92\` FOREIGN KEY (\`idProduct\`) REFERENCES \`product\`(\`idProduct\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_2ef9a0f20cd89d295a736d4df83\` FOREIGN KEY (\`idClient\`) REFERENCES \`client\`(\`idClient\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_53f834e28da0b211dd71e25f5a0\` FOREIGN KEY (\`idEmployee\`) REFERENCES \`employee\`(\`idEmployee\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_53f834e28da0b211dd71e25f5a0\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_2ef9a0f20cd89d295a736d4df83\``);
        await queryRunner.query(`ALTER TABLE \`order_details\` DROP FOREIGN KEY \`FK_3f45e5f0c6b43aec31bf69bbe92\``);
        await queryRunner.query(`ALTER TABLE \`order_details\` DROP FOREIGN KEY \`FK_adc0788e0783449f80387920ed9\``);
        await queryRunner.query(`DROP TABLE \`client\``);
        await queryRunner.query(`DROP TABLE \`order\``);
        await queryRunner.query(`DROP TABLE \`employee\``);
        await queryRunner.query(`DROP TABLE \`order_details\``);
        await queryRunner.query(`DROP TABLE \`product\``);
    }

}
