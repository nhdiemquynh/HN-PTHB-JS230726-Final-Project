import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { CreateMovieDto } from './movies.dto';

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  genre: string;

  @Column()
  release_year: string;

  @Column()
  director: string;

  @Column()
  poster_path: string;

  @Column()
  movie_path: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  beforeInsert() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  constructor(movie?: CreateMovieDto) {
    // Add constructor with CreateMovieDto parameter
    if (movie != undefined && movie != null) {
      if (movie.title && movie.title != null) this.title = movie.title;
      if (movie.description && movie.description != null)
        this.description = movie.description;
      if (movie.genre && movie.genre != null) this.genre = movie.genre;
      if (movie.updated_at && movie.updated_at != null)
        this.updated_at = movie.updated_at;
      if (movie.release_year && movie.release_year != null)
        this.release_year = movie.release_year;
      if (movie.director && movie.director != null)
        this.director = movie.director;
      if (movie.poster_path && movie.poster_path != null)
        this.poster_path = movie.poster_path;
      if (movie.movie_path && movie.movie_path != null)
        this.movie_path = movie.movie_path;
    }
  }
}
