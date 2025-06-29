import {
    forwardRef,
    Inject,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Equal, Repository } from 'typeorm';
  import { CoursesService } from 'src/courses/courses.service';
  import { Request } from 'express';
  import { Enrollment } from './entitiees/enrollment.entity';
  import { UserRepository } from 'src/auth/entities/auth.entity';
  import { CreateEnrollmentDto } from './dtos/enrollment-create.dto';
  import { UserService } from 'src/auth/auth.service';
  
  interface AuthRequest extends Request {
    user: { id: number };
  }
  
  @Injectable()
  export class EnrollmentsService {
    constructor(
      @InjectRepository(Enrollment)
      private enrolRepo: Repository<Enrollment>,
      @Inject(forwardRef(() => UserService))
      private userService: UserService,
      @Inject(forwardRef(() => CoursesService))
      private course: CoursesService,
    ) {}
  
    async create(createEnrollmentDto: CreateEnrollmentDto) {
      const course = await this.course.findOne(createEnrollmentDto.courseId);
      const user = await this.userService.findOne(createEnrollmentDto.userId);
  
      const enrollment = this.enrolRepo.create({
        userId: user,       
        courseId: course,   
      });
  
      return await this.enrolRepo.save(enrollment);
    }
  
    async getEnrolls(req: AuthRequest) {
      const userID = req.user.id;
  
      const enrollments = await this.enrolRepo.find({
        where: { userId: Equal(userID) },
      });
  
      if (enrollments.length === 0)
        throw new NotFoundException('No enrollments found');
  
      return enrollments;
    }
  }
  