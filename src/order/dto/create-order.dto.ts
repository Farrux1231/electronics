import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ description: 'ID of the associated product', example: 100 })
  @IsInt()
  productId: number;

  @ApiProperty({ description: 'ID of the user placing the order', example: 1 })
  @IsInt()
  userId: number;

  @ApiProperty({ description: 'Number of products ordered', example: 3 })
  @IsInt()
  @IsPositive()
  prod_count: number;

}

