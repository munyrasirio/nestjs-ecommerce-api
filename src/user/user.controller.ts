import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { randomUUID } from 'crypto';
import { UserEntity } from './user.entity';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const id = randomUUID();
    const userEntity = new UserEntity({ ...userData, id });

    this.userRepository.save(userEntity);
  }

  @Get()
  async getUsers() {
    return this.userRepository.get();
  }
}
