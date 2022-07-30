import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addDateIten1658062143087 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("itens", new TableColumn({
            name: "date_item",
            type: "timestamp",
            default: "now()"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("itens", "date_item")
    }

}
