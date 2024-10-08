import { IsString, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class InfoUserResDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  static from({ id, name, email }: User) {
    return { id, name, email };
  }
}
