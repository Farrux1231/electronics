import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { verifyUserDto } from './dto/verify-user.dto';
import { reSendotpDto } from './dto/resendOtp-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  register(@Body() data: CreateUserDto) {
    return this.userService.register(data);
  }

  @Post("verify")
  verify(@Body()data:verifyUserDto){
    return this.userService.verifyOtp(data)
  }

  @Post("reSend-otp")
  reSendOtp(@Body()data:reSendotpDto){
    return this.userService.reSendotp(data)
  }

  @Post("login")
  login(@Body() data: LoginUserDto){
    return this.userService.login(data)
  }
  
}
