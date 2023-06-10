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
import { UserEntity } from './user.entity';
import { GetUserDTO } from './dto/get-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(
    private userRepository: UserRepository,
    private userService: UserService,
  ) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const id = randomUUID();
    const userEntity: UserEntity = { id, ...userData };
    await this.userService.createUser(userEntity);

    return {
      user: new GetUserDTO(userEntity.id, userEntity.name),
      message: 'User created successfully.',
    };
  }

  @Put('/:id')
  async updateUser(@Param('id') id: UUID, @Body() userData: UpdateUserDTO) {
    const user = await this.userService.updateUser(id, userData);

    return {
      user,
      message: 'User updated successfully.',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: UUID) {
    const userId = await this.userService.deleteUser(id);

    return {
      id: userId,
      message: 'Successfully deleted user.',
    };
  }

  @Get()
  async getUsers() {
    const users = await this.userService.getUsers();
    return users;
  }
}
