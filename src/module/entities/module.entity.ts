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

  @Column()
  tittle: string;
  @ManyToOne(() => Course)
  courseId: Course;

  @CreateDateColumn()
  createdAt: Date;
}
