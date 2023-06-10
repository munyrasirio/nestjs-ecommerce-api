import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { IsUniqueEmailValidator } from './validation/is-unique-email.validator';
import { IsUserValidator } from './validation/is-user.validator';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    IsUniqueEmailValidator,
    IsUserValidator,
  ],
  exports: [IsUserValidator],
})
export class UserModule {}
