import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Categories1713972368679 implements MigrationInterface {
  private table = new Table({
    name: 'categories',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true, // Auto-increment
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'status',
        type: 'boolean',
        isNullable: false,
      },
      {
        name: 'movies',
        type: 'text',
        isNullable: true,
      },
      {
        name: 'created_at',
        type: 'datetime',
        isNullable: false,
      },
      {
        name: 'updated_at',
        type: 'datetime',
        isNullable: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
