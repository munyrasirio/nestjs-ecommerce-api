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

  private getById(id: UUID) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new Error('User does not exist');

    return user;
  }

  async update(id: UUID, userData: Partial<UserEntity>) {
    const user = this.getById(id);

    Object.entries(userData).forEach(([key, value]) => {
      if (key === 'id') return;
      user[key] = value;
    });

    return user;
  }

  async delete(id: UUID) {
    const userById = this.getById(id);
    this.users = this.users.filter((user) => user.id !== id);

    return userById.id;
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
