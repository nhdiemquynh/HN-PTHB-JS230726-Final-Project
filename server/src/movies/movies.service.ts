import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto, UpdateMovieDto } from './movies.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) // Inject the Movie repository
    private moviesRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = new Movie(createMovieDto);
    return await this.moviesRepository.save(movie); // Save movie to database
  }

  async findAll(): Promise<Movie[]> {
    return await this.moviesRepository.find(); // Find all movies
  }

  async findOne(id: number): Promise<Movie | undefined> {
    return await this.moviesRepository.findOne({ where: { id } }); // Find movie by ID
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.moviesRepository.findOne({ where: { id } });

    if (!movie) {
      throw new Error('Movie not found');
    }

    await this.moviesRepository.update(id, updateMovieDto); // Update movie in database
    return await this.moviesRepository.findOne({ where: { id } }); // Return updated movie
  }

  async remove(id: number): Promise<void> {
    const movie = await this.moviesRepository.findOne({ where: { id } });

    if (!movie) {
      throw new Error('Movie not found');
    }

    await this.moviesRepository.delete(id); // Delete movie from database
  }
}
