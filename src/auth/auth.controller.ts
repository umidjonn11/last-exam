import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Request,Response } from 'express';
import { UserService } from './auth.service';
import { CreateUserDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/update-auth.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() registerDto: CreateUserDto) {
    try {
      const user = await this.userService.create(registerDto);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.log(loginDto, '--contr');

    const { user, token,refreshToken } =
      await this.userService.login(loginDto);

    res
      .status(HttpStatus.OK)
      .json({ status: 'Success', data: { user, token,refreshToken } });
  }
}