import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './historys.entity';
import { HistorysService } from './historys.service';
import { ApiHistorysController } from './historys.controller';

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  providers: [HistorysService],
  controllers: [ApiHistorysController],
})
export class HistorysModule {}
