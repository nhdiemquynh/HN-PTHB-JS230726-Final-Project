import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLikeDto, UpdateLikeDto } from 'src/likes/likes.dto';
import { LikesService } from 'src/likes/likes.service';

@Controller('/api/likes')
export class ApiLikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post() // Create a new like
  create(@Body() createLikeDto: CreateLikeDto) {
    return this.likesService.create(createLikeDto);
  }

  @Get() // Get all likes
  findAll() {
    return this.likesService.findAll();
  }

  @Get(':id') // Get a like by ID
  findOne(@Param('id') id: string) {
    return this.likesService.findOne(+id); // Convert string ID to number
  }

  @Put(':id') // Update a like
  update(@Param('id') id: string, @Body() updateLikeDto: UpdateLikeDto) {
    return this.likesService.update(+id, updateLikeDto);
  }

  @Delete(':id') // Delete a like
  remove(@Param('id') id: string) {
    return this.likesService.remove(+id);
  }
}
