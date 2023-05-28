import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    email: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const hasEmailOnDatabase = await this.userRepository.emailExists(email);

    return !hasEmailOnDatabase;
  }
}

export const IsUniqueEmail = (options: ValidationOptions) => {
  return (object: Object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options,
      constraints: [],
      validator: IsUniqueEmailValidator,
    });
  };
};
