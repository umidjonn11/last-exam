import { ApiProperty } from '@nestjs/swagger';
import { Course } from 'src/courses/entities/course.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'module' })
export class ModuleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @ManyToOne(() => Course, { onDelete: 'CASCADE',})
  courseId: Course;

  @OneToMany(() => Lesson, (lesson) => lesson.moduleId)
  lessons: Lesson[];

  @CreateDateColumn()
  createdAt: Date;
}
