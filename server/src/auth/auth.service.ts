// auth.service.ts

import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) // Inject the User repository
  private usersRepository: Repository<User>
) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOneBy({ email: username });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
