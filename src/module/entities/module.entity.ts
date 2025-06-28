import { ApiProperty } from '@nestjs/swagger';
import { Course } from 'src/courses/entities/course.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'module' })
export class ModuleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Python oop',
    description: 'Python darslari',
    required: true,
  })
  @Column()
  tittle: string;
  @ApiProperty({ example: 1, description: 'Course id', required: true })
  @ManyToOne(() => Course)
  courseId: Course;

  @CreateDateColumn()
  createdAt: Date;
}
