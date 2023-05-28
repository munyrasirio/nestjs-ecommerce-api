import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUserValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    userId: UUID,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    return await this.userRepository.userExists(userId);
  }
}

export const IsUser = (options: ValidationOptions) => {
  return (object: Object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options,
      constraints: [],
      validator: IsUserValidator,
    });
  };
};
