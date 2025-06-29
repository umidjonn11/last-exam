import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './auth.service';
import { CreateUserDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/update-auth.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiOperation({ summary: 'Create a user' })
  async create(@Body() registerDto: CreateUserDto) {
    try {
      const user = await this.userService.create(registerDto);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
  @ApiOperation({ summary: 'Login to an account' })
  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.log(loginDto, '--contr');

    const { user, token, refreshToken } =
      await this.userService.login(loginDto);

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 3600 * 24 * 10,
    });

    res
      .status(HttpStatus.OK)
      .json({ status: 'Success', data: { user, token } });
  }
  @ApiOperation({ summary: 'Get a refresh token' })
  @Get('refresh')
  async refreshToken(@Req() req: Request, @Res() res: Response) {
    const token = req.cookies['jwt'];
    console.log(token);

    const data: any = await this.userService.refresh(token);
    console.log(data);

    res.status(HttpStatus.OK).json({
      status: 'Succes',
      data: { user: data.user, token: data.access },
    });
  }
}
