import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Movies1713633107756 implements MigrationInterface {
  private table = new Table({
    name: 'movies',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true, // Auto-increment
        generationStrategy: 'increment',
      },
      {
        name: 'title',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'description',
        type: 'text',
        isNullable: true,
      },
      {
        name: 'release_year',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'director',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'genre',
        type: 'text',
        isNullable: true,
      },
      {
        name: 'poster_path',
        type: 'text',
        isNullable: true,
      },
      {
        name: 'movie_path',
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
