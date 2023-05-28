import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validation/is-unique-email.validator';

export class CreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsUniqueEmail({ message: 'This e-mail already exists in our database.' })
  email: string;

  @MinLength(6)
  password: string;
}
