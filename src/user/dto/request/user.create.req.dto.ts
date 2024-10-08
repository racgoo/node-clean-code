import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreateReqDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
