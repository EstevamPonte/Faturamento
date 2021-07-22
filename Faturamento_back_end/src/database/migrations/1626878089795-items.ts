import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class items1626878089795 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'itens',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'instellment',
                        type: 'integer',
                        isNullable: true,
                    },
                    {
                        name: 'value',
                        type: 'integer',
                    },
                    {
                        name: 'date_created',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'status_id',
                        type: 'integer'
                    },
                    {
                        name: 'control_id',
                        type: 'integer'
                    },
                    {
                        name: 'spending_id',
                        type: 'integer'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FLStatusItem',
                        referencedTableName: 'status',
                        referencedColumnNames: ['id'],
                        columnNames: ['status_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FLControlItem',
                        referencedTableName: 'control',
                        referencedColumnNames: ['id'],
                        columnNames: ['control_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FLSpenddingItem',
                        referencedTableName: 'spendings',
                        referencedColumnNames: ['id'],
                        columnNames: ['spending_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('itens')
    }

}
