import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';

@Injectable()
export class UserRepository {
  private users = [];

  async save(user) {
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
