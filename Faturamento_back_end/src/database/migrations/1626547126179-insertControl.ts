import {MigrationInterface, QueryRunner, getConnection} from "typeorm";
import { Control } from "../../entities/Control";

export class insertControl1626547126179 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Control)
            .values([
                {name: 'FIXO'},
                {name: 'PARCELADA'},
                {name: 'AVULSO'},
                {name: 'POUPANÇA'},
                {name: 'PROVISÃO'},
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Control)
            .where("name = :name", {name: 'FIXO'})
            .where("name = :name", {name: 'PARCELADA'})
            .where("name = :name", {name: 'AVULSO'})
            .where("name = :name", {name: 'POUPANÇA'})
            .where("name = :name", {name: 'PROVISÃO'})
            .execute()
    }

}
