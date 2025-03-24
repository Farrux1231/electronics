import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsOptional, IsInt, isEnum } from 'class-validator';
import { UserRole } from 'src/enum/user.enum';

export class verifyUserDto {
  @ApiProperty({ description: 'Email of the user', example: 'user@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Otp that we sended you email', example: '157842' })
  code:string
}

