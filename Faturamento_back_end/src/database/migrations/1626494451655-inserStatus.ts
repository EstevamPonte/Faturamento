import {MigrationInterface, QueryRunner, getConnection} from "typeorm";
import { Status } from "../../entities/Status";

export class inserStatus1626494451655 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into(Status)
            .values([
                { name: 'PAGO' }, 
                { name: 'PENDENTE' },
                { name: 'POUPANÇA' },
                { name: 'PROVISÃO' }
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from(Status)
            .where("name = :name", {name: 'PAGO'})
            .where("name = :name", {name: 'PENDENTE'})
            .where("name = :name", {name: 'POUPANÇA'})
            .where("name = :name", {name: 'PROVISÃO'})
            .execute()
    }

}
