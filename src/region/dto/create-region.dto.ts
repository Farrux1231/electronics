import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRegionDto {
  @ApiProperty({ description: 'Name of the region', example: 'California' })
  @IsString()
  @IsNotEmpty()
  name: string;
}

