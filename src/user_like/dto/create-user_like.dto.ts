import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateUserLikeDto {
  @ApiProperty({ description: 'ID of the user who liked the product', example: 1 })
  @IsInt()
  userId: number;

  @ApiProperty({ description: 'ID of the liked product', example: 100 })
  @IsInt()
  productId: number;
}
