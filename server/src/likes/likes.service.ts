import { Injectable } from '@nestjs/common';
import { Like } from './likes.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLikeDto, UpdateLikeDto } from './likes.dto';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like) // Inject the Like repository
    private likesRepository: Repository<Like>,
  ) {}

  async create(createLikeDto: CreateLikeDto): Promise<Like> {
    const like = new Like(createLikeDto);
    return await this.likesRepository.save(like); // Save like to database
  }

  async findAll(): Promise<Like[]> {
    return await this.likesRepository.find(); // Find all likes
  }

  async findOne(id: number): Promise<Like | undefined> {
    return await this.likesRepository.findOne({ where: { id } }); // Find like by ID
  }

  async update(id: number, updateLikeDto: UpdateLikeDto): Promise<Like> {
    const like = await this.likesRepository.findOne({ where: { id } });

    if (!like) {
      throw new Error('Like not found');
    }

    await this.likesRepository.update(id, updateLikeDto); // Update like in database
    return await this.likesRepository.findOne({ where: { id } }); // Return updated like
  }

  async remove(id: number): Promise<void> {
    const like = await this.likesRepository.findOne({ where: { id } });

    if (!like) {
      throw new Error('Like not found');
    }

    await this.likesRepository.delete(id); // Delete like from database
  }
}
