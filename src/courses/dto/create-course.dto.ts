import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsOptional,
  IsIn,
} from 'class-validator';

enum Categories {
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Design',
}

enum COURSE_LEVELS {
  'Beginner',
  'Intermediate',
  'Advanced',
}

export class CreateCourseDto {
  @ApiProperty({
    example: 'Advanced NestJS',
    description: 'Course name',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Master NestJS with advanced techniques',
    description: 'Course description',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 99.99,
    description: 'Course price in USD',
    required: true,
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    example: 1,
    description: 'Instructor id',
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  teacher: number;

  @ApiProperty({
    example: 'Web Development',
    description: 'Course category',
    enum: Categories,
    required: true,
  })
  @IsString()
  category: Categories;

  @ApiProperty({
    example: 'Intermediate',
    description: 'Difficulty level',
    enum: COURSE_LEVELS,
    required: true,
  })
  @IsString()
  level: COURSE_LEVELS;
}
