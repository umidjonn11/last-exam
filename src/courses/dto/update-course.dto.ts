import { ApiProperty } from '@nestjs/swagger';
import { 
  IsString, 
  IsNotEmpty, 
  IsNumber, 
  IsPositive, 
  IsOptional,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { CreateCourseDto } from './create-course.dto';


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

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @ApiProperty({
    example: 'Updated Advanced NestJS',
    description: 'Updated course name',
    required: false
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example: 129.99,
    description: 'Updated price',
    required: false
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({
    example:2,
    description:"Updated instructor",
    required:false,
  })
  @IsNumber()
  @IsOptional()
  teacher?: number | undefined;

  @ApiProperty({
    example: 'Web Development',
    description: 'Course category',
    enum: Categories,
    required: false,
  })
  @IsString()
  category: Categories;

  @ApiProperty({
    example: 'Intermediate',
    description: 'Difficulty level',
    enum: COURSE_LEVELS,
    required: false,
  })
  @IsString()
  level: COURSE_LEVELS;
}