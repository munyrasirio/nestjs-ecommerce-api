import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validation/is-unique-email.validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsUniqueEmail({ message: 'This e-mail already exists in our database.' })
  @IsOptional()
  email: string;

  @MinLength(6)
  @IsOptional()
  password: string;
}
