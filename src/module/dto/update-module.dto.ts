import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleDto } from './create-module.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateModuleDto extends PartialType(CreateModuleDto) {
  @IsString()
  @IsOptional()
  title: string;

  @IsNumber()
  @IsOptional()
  courseId: number;
}
