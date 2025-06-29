import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonDto {
  @ApiProperty({ example: 'Introduction to Algebra', description: 'The title of the lesson' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 'This lesson covers basic algebraic operations.', description: 'The main content of the lesson' })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ example: 1, description: 'ID of the module this lesson belongs to' })
  @IsNotEmpty()
  @IsNumber()
  moduleId: number;
}
