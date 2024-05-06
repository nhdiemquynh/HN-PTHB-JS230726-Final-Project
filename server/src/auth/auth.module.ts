import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from 'src/users/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: 'YOUR_SECRET_KEY',
    signOptions: { expiresIn: '1h' }, // Thời gian hết hạn của token
  })],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
