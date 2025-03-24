import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateColorDto {
  @ApiProperty({ description: 'Name of the color', example: 'Red' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'ID of the associated product', example: 2 })
  @IsInt()
  productId: number;
}

