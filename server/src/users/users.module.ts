import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UsersService } from './users.service';
import { ApiUsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: 'YOUR_SECRET_KEY',
    signOptions: { expiresIn: '1h' }, // Thời gian hết hạn của token
  })],
  providers: [UsersService],
  controllers: [ApiUsersController],
})
export class UsersModule {}
