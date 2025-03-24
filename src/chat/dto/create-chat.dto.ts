import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsNotEmpty, Min } from 'class-validator';

export class CreateChatDto {
  @ApiProperty({ description: 'ID of the sender user', example: 1 })
  @IsInt()
  fromId: number;

  @ApiProperty({ description: 'ID of the recipient user', example: 2 })
  @IsInt()
  toId: number;

  @ApiProperty({ description: 'ID of the product related to the chat', example: 2 })
  @IsInt()
  productId: number;

  @ApiProperty({ description: 'Content of the chat message', example: 'Hello, is this still available?' })
  @IsString()
  @IsNotEmpty()
  text: string;
}
