import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class spenfing1626551773915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'spendings',
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
                        name: 'total',
                        type: 'integer',
                        default: 0
                    },
                    {
                        name: 'date_created',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'user_reference',
                        type: 'integer'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FLUserSpendings',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_reference'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('spendings')
    }

}
