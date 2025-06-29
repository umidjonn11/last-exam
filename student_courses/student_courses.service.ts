import { forwardRef, Inject, Injectable } from '@nestjs/common';

import { CoursesService } from 'src/courses/courses.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentCourse } from './entities/student_courses.entity';
import { UserRepository } from 'src/auth/entities/auth.entity';
import { UserService } from 'src/auth/auth.service';
import { LessonsService } from 'src/lessons/lessons.service';
import { ModuleService } from 'src/module/module.service';
import { CreateStudentCourseDto } from './dto/create.student_courses-dto';

@Injectable()
export class StudentCoursesService {
  constructor(
    @InjectRepository(StudentCourse)
    private studentCourses: Repository<StudentCourse>,
    @Inject(forwardRef(() => UserService)) private user:UserService ,
    @Inject(forwardRef(() => LessonsService)) private lesson: LessonsService,
    @Inject(forwardRef(() => ModuleService)) private modul: ModuleService,
    @Inject(forwardRef(() => CoursesService)) private course: CoursesService,
    
  ) {}
  async create(createStudentCourseDto: CreateStudentCourseDto) {
    const user = await this.user.findOne(createStudentCourseDto.studentId);
    const course = await this.course.findOne(createStudentCourseDto.courseId);
    const module = await this.modul.findOne(createStudentCourseDto.moduleId);
    const lesson = await this.lesson.findOne(createStudentCourseDto.lessonId);

    const student_courses = this.studentCourses.create({
      ...createStudentCourseDto,
      studentId: user.id,
      courseId: course.id,
      lessonId: lesson.id,
      moduleId: module.id,
    });
    return await this.studentCourses.save(student_courses);
  }

  async findAll(studentId: number) {
    const user = await this.user.findOne(studentId);
    const student_courses = await this.studentCourses.find({
      where: { studentId: user.id },
      relations: ['studentId', 'courseId', 'lessonId'],
    });
    return student_courses;
  }
}