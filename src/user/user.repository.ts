import { Injectable } from '@nestjs/common';

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
    const receivedUser = this.users.find((user) => user.email === email);

    return receivedUser !== undefined;
  }
}
