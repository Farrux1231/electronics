import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsNotEmpty, Min, Max, IsNumber } from 'class-validator';

export class CreateComentDto {
  @ApiProperty({ description: 'ID of the user creating the comment', example: 1 })
  @IsInt()
  userId: number;

  @ApiProperty({ description: 'ID of the associated product', example: 100 })
  @IsInt()
  productId: number;

  @ApiProperty({ description: 'Content of the comment', example: 'Great product, highly recommend!' })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiProperty({ description: 'Star rating for the product', example: 4.5 })
  @IsNumber()
  @Min(0)
  @Max(5)
  star: number;
}

