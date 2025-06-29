import { forwardRef, Module } from '@nestjs/common';
import { StudentCoursesService } from './student_courses.service';
import { StudentCoursesController } from './student_courses.controller';
import { CoursesModule } from 'src/courses/courses.module';
import { LessonsModule } from 'src/lessons/lessons.module';
import { ModuleModule } from 'src/module/module.module';
import {  UserModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCourse } from './entities/student_courses.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentCourse]),
    forwardRef(() => CoursesModule),
    forwardRef(() => LessonsModule),
    forwardRef(() => ModuleModule),
    forwardRef(() => UserModule),
  ],
  controllers: [StudentCoursesController],
  providers: [StudentCoursesService],
})
export class StudentCoursesModule {}