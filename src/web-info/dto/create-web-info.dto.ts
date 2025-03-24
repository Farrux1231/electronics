import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateWebInfoDto {
  @ApiProperty({ description: 'Phone number for contact', example: '+1234567890' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ description: 'Description of the website or company', example: 'This is a leading e-commerce platform.' })
  @IsString()
  @IsNotEmpty()
  desc: string;

  @ApiProperty({ description: 'Email address for contact', example: 'info@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Telegram link', example: 'https://t.me/example', required: false })
  @IsString()
  @IsOptional()
  telegram_link?: string;

  @ApiProperty({ description: 'Instagram link', example: 'https://instagram.com/example', required: false })
  @IsString()
  @IsOptional()
  insta_link?: string;

  @ApiProperty({ description: 'Facebook link', example: 'https://facebook.com/example', required: false })
  @IsString()
  @IsOptional()
  facebook_link?: string;
}

