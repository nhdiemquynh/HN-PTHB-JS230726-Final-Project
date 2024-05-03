import { Injectable } from '@nestjs/common';
import { Category } from './categories.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from './categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) // Inject the Category repository
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const categorie = new Category(createCategoryDto);
    return await this.categoriesRepository.save(categorie); // Save categorie to database
  }


  /**
   * Retrieves all categories from the database.
   *
   * @return {Promise<Category[]>} An array of categories.
   */
  async findAll(): Promise<Category[]> {
    // Call the find method of the categoriesRepository to retrieve all categories.
    return await this.categoriesRepository.find();
  }

  async findOne(id: number): Promise<Category | undefined> {
    return await this.categoriesRepository.findOne({ where: { id } }); // Find categorie by ID
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const categorie = await this.categoriesRepository.findOne({ where: { id } });

    if (!categorie) {
      throw new Error('Category not found');
    }

    await this.categoriesRepository.update(id, updateCategoryDto); // Update categorie in database
    return await this.categoriesRepository.findOne({ where: { id } }); // Return updated categorie
  }

  async remove(id: number): Promise<void> {
    const categorie = await this.categoriesRepository.findOne({ where: { id } });

    if (!categorie) {
      throw new Error('Category not found');
    }

    await this.categoriesRepository.delete(id); // Delete categorie from database
  }
}
