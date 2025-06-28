import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateModuleDto {
    @ApiProperty({
        example: 'Python oop',
        description: 'Python darslari',
        required: true,
      })
  @IsString()
  title: string;
  
  @ApiProperty({ example: 1, description: 'Course id', required: true })
  @IsNumber()
  @IsNotEmpty()
  courseId: number;
}
