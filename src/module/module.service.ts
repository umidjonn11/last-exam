import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleEntity } from './entities/module.entity';
import { Equal, Repository } from 'typeorm';
import { CoursesService } from 'src/courses/courses.service';
import { LessonsService } from 'src/lessons/lessons.service';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(ModuleEntity)
    private moduleRepo: Repository<ModuleEntity>,
    private courseService: CoursesService,
    @Inject(forwardRef(() => LessonsService))
    private lessonService: LessonsService,
  ) {}
  async create(createModuleDto: CreateModuleDto | any) {
    await this.courseService.findOne(createModuleDto.courseId);
    const module = this.moduleRepo.create(createModuleDto);
    return await this.moduleRepo.save(module);
  }

  async findOne(id: number) {
    const module = await this.moduleRepo.findOne({ where: { id } });
    if (!module) throw new NotFoundException('Module topilmadi');
    return module;
  }

  async getLessons(id: number) {
    const lessons = await this.lessonService.getLesson(id);
    return lessons
  }


 async getModule(id:number|any){
  const course=await this.courseService.findOne(id)
  const module=await this.moduleRepo.find({where:{courseId:Equal(course.id)}})
  if (module.length === 0) throw new NotFoundException('No lessons found');
  return module;

 }
}
