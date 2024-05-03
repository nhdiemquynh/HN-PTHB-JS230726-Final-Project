import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateHistoryDto, UpdateHistoryDto } from 'src/historys/historys.dto';
import { HistorysService } from 'src/historys/historys.service';

@Controller('/api/historys')
export class ApiHistorysController {
  constructor(private readonly historysService: HistorysService) {}

  @Post() // Create a new history
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historysService.create(createHistoryDto);
  }

  @Get() // Get all historys
  findAll() {
    return this.historysService.findAll();
  }

  @Get(':id') // Get a history by ID
  findOne(@Param('id') id: string) {
    return this.historysService.findOne(+id); // Convert string ID to number
  }

  @Put(':id') // Update a history
  update(@Param('id') id: string, @Body() updateHistoryDto: UpdateHistoryDto) {
    return this.historysService.update(+id, updateHistoryDto);
  }

  @Delete(':id') // Delete a history
  remove(@Param('id') id: string) {
    return this.historysService.remove(+id);
  }
}
