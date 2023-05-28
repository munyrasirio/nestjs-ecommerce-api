import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { IsUniqueEmailValidator } from './validation/is-unique-email.validator';
import { IsUserValidator } from './validation/is-user.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, IsUniqueEmailValidator, IsUserValidator],
  exports: [IsUserValidator],
})
export class UserModule {}
