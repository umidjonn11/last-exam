import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ default: 'Qwerty1234' })
  @IsOptional()
  @IsString()
  username: string;
  @ApiProperty({ default: 'Kozya' })
  @IsString()
  @IsOptional()
  password: string;
}