import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { randomUUID } from 'crypto';
import { UserEntity } from './user.entity';
import { GetUserDTO } from './dto/get-user.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const id = randomUUID();
    const userEntity = new UserEntity({ ...userData, id });

    this.userRepository.save(userEntity);

    return {
      user: new GetUserDTO(userEntity.id, userEntity.name),
      message: 'User created successfully.',
    };
  }

  @Get()
  async getUsers() {
    const users = await this.userRepository.get();
    return users.map((user) => new GetUserDTO(user.id, user.name));
  }
}
