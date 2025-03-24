import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ description: 'Email of the user', example: 'user@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Password of the user', example: 'securePassword123' })
  @IsString()
  @IsNotEmpty()
  password: string;

}

