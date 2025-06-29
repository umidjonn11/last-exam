import {  UserRepository } from 'src/auth/entities/auth.entity';
import { Course } from 'src/courses/entities/course.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'enrollments' })
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Course)
  courseId: Course;

  @ManyToOne(() => UserRepository)
  userId: UserRepository;

  @CreateDateColumn()
  createdAt: Date;
}