import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Equal, Repository } from 'typeorm';
import { ModuleService } from 'src/module/module.service';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson) private lessonRepo: Repository<Lesson>,
    @Inject(forwardRef(() => ModuleService)) private moduleService: ModuleService,
  ) {}
  async create(createLessonDto: CreateLessonDto | any) {
    await this.moduleService.findOne(createLessonDto.moduleId);
    const lesson = this.lessonRepo.create(createLessonDto);
    return this.lessonRepo.save(lesson);
  }

 async getLesson(id:number|any) {
    const module=await this.moduleService.findOne(id)
    const lessons=await this.lessonRepo.find({where:{moduleId:Equal(module.id)}});
    if (lessons.length === 0) throw new NotFoundException('No lessons found');
    return lessons;
  }

}
