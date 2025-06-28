import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleDto } from './create-module.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateModuleDto extends PartialType(CreateModuleDto) {
  @ApiProperty({
    example: 'Python oop',
    description: 'Python darslari',
    required: true,
  })
  @IsString()
  @IsOptional()
  title: string;
  @ApiProperty({ example: 1, description: 'Course id', required: true })
  @IsNumber()
  @IsOptional()
  courseId: number;
}
