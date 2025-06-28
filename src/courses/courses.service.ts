import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { UserService } from 'src/auth/auth.service';
import { UserRole } from 'src/security/roles.enum';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepo: Repository<Course>,
    private userService: UserService,
  ) {}

  async create(createCourseDto: CreateCourseDto | any): Promise<Course[]> {
    const teacher = await this.userService.findOne(createCourseDto.teacher);
    if (!teacher || teacher.role !== UserRole.teacher) {
      throw new NotFoundException('Teacher topilmadi');
    }
    const course = this.courseRepo.create(createCourseDto);
    return this.courseRepo.save(course);
  }

  findAll(): Promise<Course[]> {
    return this.courseRepo.find({relations:["teacher"]});
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.courseRepo.findOne({
      where: { id },
      relations:["teacher"],
    });
    if (!course) throw new NotFoundException(`Course with ID ${id} not found`);
    return course;
  }

  async update(
    id: number,
    updateCourseDto: UpdateCourseDto | any,
  ): Promise<Course> {
    const teacher = await this.userService.findOne(updateCourseDto.teacher);
    if (!teacher || teacher.role !== UserRole.teacher) {
      throw new NotFoundException('Teacher topilmadi');
    }
    const course = await this.courseRepo.preload({
      id,
      ...updateCourseDto,
    });
    if (!course) throw new NotFoundException(`Course with ID ${id} not found`);
    return this.courseRepo.save(course);
  }

  async remove(id: number) {
    const result = await this.courseRepo.delete(id);
    if (!result) {
      throw new NotFoundException(` ${id} chi id li kurs topilmadi`);
    }
    return "Muvaffaqiyatli uchirildi"
  }
}
