import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateActorDto, UpdateActorDto } from 'src/actors/actors.dto';
import { ActorsService } from 'src/actors/actors.service';

@Controller('/api/actors')
export class ApiActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Post() // Create a new actor
  create(@Body() createActorDto: CreateActorDto) {
    return this.actorsService.create(createActorDto);
  }

  @Get() // Get all actors
  findAll() {
    return this.actorsService.findAll();
  }

  @Get(':id') // Get a actor by ID
  findOne(@Param('id') id: string) {
    return this.actorsService.findOne(+id); // Convert string ID to number
  }

  @Put(':id') // Update a actor
  update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
    return this.actorsService.update(+id, updateActorDto);
  }

  @Delete(':id') // Delete a actor
  remove(@Param('id') id: string) {
    return this.actorsService.remove(+id);
  }
}
