import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addFinelInstallmentColunm1628640565609 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("itens", new TableColumn({
            name: "final_installment",
            type: "timestamp",
            default: "now()"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("itens", "final_installment")
    }

}
