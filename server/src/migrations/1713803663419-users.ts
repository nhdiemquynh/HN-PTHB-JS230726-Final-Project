import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Users1713803663419 implements MigrationInterface {
  private table = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true, // Auto-increment
        generationStrategy: 'increment',
      },
      {
        name: 'fullname',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'email',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'password',
        type: 'text',
        length: '1000',
        isNullable: false,
      },
      {
        name: 'avatar',
        type: 'text',
        isNullable: true,
      },
      {
        name: 'status',
        type: 'boolean',
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
