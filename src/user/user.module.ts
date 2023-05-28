import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { IsUniqueEmailValidator } from './validation/is-unique-email.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, IsUniqueEmailValidator],
})
export class UserModule {}
