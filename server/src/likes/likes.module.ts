import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './likes.entity';
import { LikesService } from './likes.service';
import { ApiLikesController } from 'src/likes/likes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Like])],
  providers: [LikesService],
  controllers: [ApiLikesController],
})
export class LikesModule {}
