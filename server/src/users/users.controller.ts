import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';

@Controller('/api/users')
export class ApiUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post() // Create a new user
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get() // Get all users
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id') // Get a user by ID
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id); // Convert string ID to number
  }

  @Put(':id') // Update a user
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id') // Delete a user
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
