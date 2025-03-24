import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserLikeService } from './user_like.service';
import { CreateUserLikeDto } from './dto/create-user_like.dto';
import { UpdateUserLikeDto } from './dto/update-user_like.dto';

@Controller('user-like')
export class UserLikeController {
  constructor(private readonly userLikeService: UserLikeService) {}

  @Post()
  create(@Body() createUserLikeDto: CreateUserLikeDto) {
    return this.userLikeService.create(createUserLikeDto);
  }

  @Get()
  findAll() {
    return this.userLikeService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userLikeService.remove(+id);
  }
}
