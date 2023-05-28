import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async get() {
    return this.users;
  }

  async emailExists(email: string) {
    const registeredEmail = this.users.find((user) => user.email === email);

    return registeredEmail !== undefined;
  }

  async userExists(userId: UUID) {
    const registeredUser = this.users.find((user) => user.id === userId);

    return registeredUser !== undefined;
  }
}
