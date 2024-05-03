import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoiveActor } from './movie_actors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MoiveActor])],
  providers: [],
  controllers: [],
})
export class moviveActorModule {}
