import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { CreateCategoryDto } from './categories.dto';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: boolean;

  @Column()
  movies: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  beforeInsert() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  constructor(categorie?: CreateCategoryDto) {
    // Add constructor with CreateCategoryDto parameter
    if (categorie != undefined && categorie != null) {
      if (categorie.name && categorie.name != null) this.name = categorie.name;
      if (categorie.status && categorie.status != null) this.status = categorie.status;
      if (categorie.movies && categorie.movies != null)
        this.movies = categorie.movies;
      if (categorie.updated_at && categorie.updated_at != null)
        this.updated_at = categorie.updated_at;
    }
  }
}
