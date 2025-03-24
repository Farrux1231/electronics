import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsOptional, IsInt, isEnum } from 'class-validator';
import { UserRole } from 'src/enum/user.enum';

export class CreateUserDto {
  @ApiProperty({ description: 'Email of the user', example: 'user@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Password of the user', example: 'securePassword123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'Name of the user', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'role', example: 'user' })
  @IsString()
  @IsOptional() 
  role?: UserRole = UserRole.USER;

  @ApiProperty({ description: 'ID of the region associated with the user', example: 1 })
  @IsInt()
  regionId: number;

  @ApiProperty({ description: 'Profile image URL of the user', example: 'https://example.com/profile.jpg', required: false })
  @IsString()
  @IsOptional()
  image?: string;
}

