import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, UpdateUserDto } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';

@Controller('/api/users')
export class ApiUsersController {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService
  ) {}

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

  @Post('/token') // Get a user by ID
  async findOneByToken(@Req() req: Request) {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Invalid token');
    }
    const token = authHeader.split(' ')[1];
    try {
      const decodedToken = this.jwtService.verify(token);
      const id = decodedToken.sub; // Assume user ID is stored in token
      // Sử dụng id để lấy thông tin user từ database
      const user = await this.usersService.findOne(id);

      return { username: user.email };
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException('Invalid token');
    }
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
