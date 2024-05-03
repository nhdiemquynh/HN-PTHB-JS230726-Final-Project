import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) // Inject the User repository
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User(createUserDto);
    return await this.usersRepository.save(user); // Save user to database
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find(); // Find all users
  }

  async findOne(id: number): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { id } }); // Find user by ID
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error('User not found');
    }

    await this.usersRepository.update(id, updateUserDto); // Update user in database
    return await this.usersRepository.findOne({ where: { id } }); // Return updated user
  }

  async remove(id: number): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error('User not found');
    }

    await this.usersRepository.delete(id); // Delete user from database
  }
}
