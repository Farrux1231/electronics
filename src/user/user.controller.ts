import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  register(@Body() data: CreateUserDto) {
    return this.userService.register(data);
  }

  @Post()
  login(@Body() data: LoginUserDto){
    return this.userService.login(data)
  }
  
}
