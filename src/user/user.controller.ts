import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { randomUUID } from 'crypto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const id = randomUUID();
    this.userRepository.save({ ...userData, id });

    return userData;
  }

  @Get()
  async getUsers() {
    return this.userRepository.get();
  }
}
