import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from './actors.entity';
import { ActorsService } from './actors.service';
import { ApiActorsController } from './actors.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Actor])],
  providers: [ActorsService],
  controllers: [ApiActorsController],
})
export class ActorsModule {}
