import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { UUID, randomUUID } from 'crypto';
import { TUser } from './user.type';
import { GetUserDTO } from './dto/get-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

type NewType = UpdateUserDTO;

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const id = randomUUID();
    const user: TUser = { id, ...userData };
    this.userRepository.save(user);

    return {
      user: new GetUserDTO(user.id, user.name),
      message: 'User created successfully.',
    };
  }

  @Put('/:id')
  async updateUser(@Param('id') id: UUID, @Body() userData: NewType) {
    const user = await this.userRepository.update(id, userData);

    return {
      user: new GetUserDTO(user.id, user.name),
      message: 'User updated successfully.',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: UUID) {
    const userId = await this.userRepository.delete(id);

    return {
      id: userId,
      message: 'Successfully deleted user.',
    };
  }

  @Get()
  async getUsers() {
    const users = await this.userRepository.get();
    return users.map((user) => new GetUserDTO(user.id, user.name));
  }
}
