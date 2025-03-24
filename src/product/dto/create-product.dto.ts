import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber, Min, IsPositive } from 'class-validator';
import { ProductType } from 'src/enum/prod.type.enum';

export class CreateProductDto {
  @ApiProperty({ description: 'Name of the product', example: 'Smartphone' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'ID of the product category', example: 10 })
  @IsInt()
  categoryId: number;

  @ApiProperty({ description: 'Image URL of the product', example: 'https://example.com/image.jpg', required: false })
  @IsString()
  @IsOptional()
  image?: string;

  @ApiProperty({ description: 'Price of the product', example: 299.99 })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ description: 'ID of the user who owns the product', example: 1 })
  @IsInt()
  userId: number;

  @ApiProperty({ description: 'Indicates if the product is new or old', example: true })
  @IsBoolean()
  new_old: boolean;

  @ApiProperty({ description: 'Indicates if the price is negotiable', example: true })
  @IsBoolean()
  deal_with_price: boolean;

  @ApiProperty({ 
    description: 'Type of the product', 
    enum: ProductType, 
    example: ProductType.ELECTRONICS 
  })
  @IsString()
  type: ProductType;

  @ApiProperty({ description: 'Description of the product', example: 'Brand new smartphone with the latest features.' })
  @IsString()
  @IsNotEmpty()
  desc: string;

  @ApiProperty({ description: 'Available stock count', example: 50 })
  @IsInt()
  @IsPositive()
  available: number;

  @ApiProperty({ description: 'Discount percentage', example: 10 })
  @IsInt()
  @Min(0)
  discount: number;

  @ApiProperty({ description: 'Location of the product', example: 'New York', required: false })
  @IsString()
  @IsOptional()
  location?: string;

}

