import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import { totp } from "otplib";
import { MailService } from 'src/mail/mail.service';
import { LoginUserDto } from './dto/login-user.dto';
import { verifyUserDto } from './dto/verify-user.dto';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly jwt: JwtService,
    private mailer : MailService
  ){}

  async findUser(email:string){
    let user = await this.prisma.user.findFirst({where:{email}})
    return user
  }

  async register(createUserDto: CreateUserDto) {
    let user = await this.findUser(createUserDto.email)
    if(user){
      throw new BadRequestException("already registred")
    }
    await this.prisma.user.create({
      data: createUserDto,
    });
    let otp = totp.generate(`${createUserDto.email}`)
    console.log(otp);
    this.mailer.sendMail(`${createUserDto.email}`, `Tastiqlash kodi`,`${otp}`)
    
    return `check your email ${createUserDto.email} and verify code`;
  }

  async verifyOtp(data:verifyUserDto){
    let isValid = totp.check(data.code, `${data.email}`);
    if(!isValid){
      throw new BadRequestException("wrong crdentials")
    }
    return "You can login now"
  }

  async login(loginUserDto:LoginUserDto){
    let user = await this.findUser(loginUserDto.email)
    if(!user){
      throw new BadRequestException("You must register first")
    }
    if(user.password == loginUserDto.password){
      let token = this.jwt.sign({id:user.id})
      return {token}
    }
  }
}
