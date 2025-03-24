import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import { totp } from "otplib";
import { MailService } from 'src/mail/mail.service';
import { LoginUserDto } from './dto/login-user.dto';
import { verifyUserDto } from './dto/verify-user.dto';
import { reSendotpDto } from './dto/resendOtp-user.dto';

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

    let has  = bcrypt.hashSync(createUserDto.password, 7)
    let newUser = {
      ...createUserDto,
      password:has
    }
    await this.prisma.user.create({
      data: newUser,
    });

    totp.options = {step:90}
    let otp = totp.generate(`${createUserDto.email}`)
    this.mailer.sendMail(`${createUserDto.email}`, `Tastiqlash kodi`,`${otp}`)
    
    return {message:`check your email ${createUserDto.email} and verify code`};
  }

  async reSendotp(data:reSendotpDto){
    let user = await this.findUser(data.email)
    if(!user){
      throw new BadRequestException("You must register first")
    }

    totp.options = {step:90}
    let otp = totp.generate(`${data.email}`)
    console.log(otp);
    
    this.mailer.sendMail(`${data.email}`, `Tastiqlash kodi`,`${otp}`)
    return {message:`check your email ${data.email} and verify code`};
  }

  async verifyOtp(data: verifyUserDto) {
    try {
          
      let isValid = totp.check(data.code, `${data.email}`);
      console.log(isValid);
      
      if (!isValid) {
        throw new BadRequestException('Invalid OTP');
      }
        await this.prisma.user.update({
        where: {
          email: data.email, 
        },
        data: {
          isActive: true, 
        },
      });
  
      return {message:`Your profile activated You can login now`};
    } catch (error) {
      console.log(error.message);
      throw new BadRequestException(error.message);
    }
  }
  

  async login(loginUserDto:LoginUserDto){
    let user = await this.findUser(loginUserDto.email)
    if(!user){
      throw new BadRequestException("You must register first")
    }
    let isValid = bcrypt.compareSync(loginUserDto.password, user.password)
    if(!isValid){
      throw new BadRequestException("Email or password wrong")
    }
    let payload = {id:user.id}
    let token = this.jwt.sign(payload, {secret:"qweasd123"})
    return {token}
  }
}
