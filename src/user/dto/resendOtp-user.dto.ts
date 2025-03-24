import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class reSendotpDto {
  @ApiProperty({ description: 'Email of the user', example: 'user@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}