import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAssignmentDto {
  @ApiProperty({ example: 'Describe the process of cell division.', description: 'Content of the assignment' })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ example: 1, description: 'ID of the module this assignment belongs to' })
  @IsNotEmpty()
  @IsNumber()
  moduleId: number;
}
