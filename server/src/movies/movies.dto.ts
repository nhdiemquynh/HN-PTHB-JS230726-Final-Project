export class CreateMovieDto {
  title: string;
  description: string;
  genre: string;
  release_year: string;
  director: string;
  poster_path: string;
  movie_path: string;
  updated_at: Date;
}

export class UpdateMovieDto {
  title: string;
  description: string;
  genre: string;
  release_year: string;
  director: string;
  poster_path: string;
  movie_path: string;
  updated_at: Date;
}
