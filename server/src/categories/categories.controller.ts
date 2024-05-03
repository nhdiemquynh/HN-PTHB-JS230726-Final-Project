import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/categories/categories.dto';
import { CategoriesService } from 'src/categories/categories.service';

@Controller('/api/categories')
export class ApiCategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post() // Create a new categorie
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get() // Get all categories
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id') // Get a categorie by ID
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id); // Convert string ID to number
  }

  @Put(':id') // Update a categorie
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id') // Delete a categorie
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
