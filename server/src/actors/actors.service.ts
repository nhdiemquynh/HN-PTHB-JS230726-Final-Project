import { Injectable } from '@nestjs/common';
import { Actor } from './actors.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateActorDto, UpdateActorDto } from './actors.dto';

@Injectable()
export class ActorsService {
  constructor(
    @InjectRepository(Actor) // Inject the Actor repository
    private actorsRepository: Repository<Actor>,
  ) {}

  async create(createActorDto: CreateActorDto): Promise<Actor> {
    const actor = new Actor(createActorDto);
    return await this.actorsRepository.save(actor); // Save actor to database
  }

  async findAll(): Promise<Actor[]> {
    return await this.actorsRepository.find(); // Find all actors
  }

  async findOne(id: number): Promise<Actor | undefined> {
    return await this.actorsRepository.findOne({ where: { id } }); // Find actor by ID
  }

  async update(id: number, updateActorDto: UpdateActorDto): Promise<Actor> {
    const actor = await this.actorsRepository.findOne({ where: { id } });

    if (!actor) {
      throw new Error('Actor not found');
    }

    await this.actorsRepository.update(id, updateActorDto); // Update actor in database
    return await this.actorsRepository.findOne({ where: { id } }); // Return updated actor
  }

  async remove(id: number): Promise<void> {
    const actor = await this.actorsRepository.findOne({ where: { id } });

    if (!actor) {
      throw new Error('Actor not found');
    }

    await this.actorsRepository.delete(id); // Delete actor from database
  }
}
