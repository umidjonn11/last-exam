import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDto } from './create-lesson.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {
  @ApiPropertyOptional({ example: 'Updated Lesson Title', description: 'Optional new title for the lesson' })
  title?: string;

  @ApiPropertyOptional({ example: 'Updated content', description: 'Optional new content for the lesson' })
  content?: string;

  @ApiPropertyOptional({ example: 2, description: 'Optional new module ID the lesson belongs to' })
  moduleId?: number;
}
