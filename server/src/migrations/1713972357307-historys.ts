import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Historys1713972357307 implements MigrationInterface {
  private table = new Table({
    name: 'historys',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true, // Auto-increment
        generationStrategy: 'increment',
      },
      {
        name: 'user_id',
        type: 'integer',
        isNullable: false,
      },
      {
        name: 'movie_id',
        type: 'integer',
        isNullable: false,
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
