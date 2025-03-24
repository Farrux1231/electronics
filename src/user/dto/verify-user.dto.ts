import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail} from 'class-validator';

export class verifyUserDto {
  @ApiProperty({ description: 'Email of the user', example: 'user@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Otp that we sended you email', example: '157842' })
  code:string
}

