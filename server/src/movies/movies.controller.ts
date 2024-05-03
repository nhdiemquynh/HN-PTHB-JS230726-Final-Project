import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMovieDto, UpdateMovieDto } from 'src/movies/movies.dto';
import { MoviesService } from 'src/movies/movies.service';

@Controller('/api/movies')
export class ApiMoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post() // Create a new movie
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get() // Get all movies
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id') // Get a movie by ID
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(+id); // Convert string ID to number
  }

  @Put(':id') // Update a movie
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(':id') // Delete a movie
  remove(@Param('id') id: string) {
    return this.moviesService.remove(+id);
  }
}
