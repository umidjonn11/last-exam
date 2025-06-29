import { UserRepository } from 'src/auth/entities/auth.entity';
import { Course } from 'src/courses/entities/course.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { ModuleEntity } from 'src/module/entities/module.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'student_courses' })
export class StudentCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserRepository)
  studentId: number;

  @ManyToOne(() => ModuleEntity)
  moduleId: number;

  @ManyToOne(() => Lesson)
  lessonId: number;

  @ManyToOne(() => Course)
  courseId: number;

  @CreateDateColumn()
  createAt: Date;
}