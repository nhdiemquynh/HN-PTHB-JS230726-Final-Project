import { Injectable } from '@nestjs/common';
import { History } from './historys.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHistoryDto, UpdateHistoryDto } from './historys.dto';

@Injectable()
export class HistorysService {
  constructor(
    @InjectRepository(History) // Inject the History repository
    private historysRepository: Repository<History>,
  ) {}

  async create(createHistoryDto: CreateHistoryDto): Promise<History> {
    const history = new History(createHistoryDto);
    return await this.historysRepository.save(history); // Save history to database
  }

  async findAll(): Promise<History[]> {
    return await this.historysRepository.find(); // Find all historys
  }

  async findOne(id: number): Promise<History | undefined> {
    return await this.historysRepository.findOne({ where: { id } }); // Find history by ID
  }

  async update(id: number, updateHistoryDto: UpdateHistoryDto): Promise<History> {
    const history = await this.historysRepository.findOne({ where: { id } });

    if (!history) {
      throw new Error('History not found');
    }

    await this.historysRepository.update(id, updateHistoryDto); // Update history in database
    return await this.historysRepository.findOne({ where: { id } }); // Return updated history
  }

  async remove(id: number): Promise<void> {
    const history = await this.historysRepository.findOne({ where: { id } });

    if (!history) {
      throw new Error('History not found');
    }

    await this.historysRepository.delete(id); // Delete history from database
  }
}
