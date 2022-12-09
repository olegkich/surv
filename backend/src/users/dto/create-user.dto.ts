import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(100, { message: 'maximum length is 100 characters' })
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
