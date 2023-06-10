import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUserDTO } from './dto/get-user.dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(userEntity: UserEntity) {
    await this.userRepository.save(userEntity);
  }

  async updateUser(id: UUID, userEntity: UpdateUserDTO) {
    await this.userRepository.update(id, userEntity);
  }

  async deleteUser(id: UUID) {
    await this.userRepository.delete(id);
  }

  async getUsers() {
    const users = await this.userRepository.find();
    const sanitizedUsers = users.map(
      (user) => new GetUserDTO(user.id, user.name),
    );

    return sanitizedUsers;
  }
}
