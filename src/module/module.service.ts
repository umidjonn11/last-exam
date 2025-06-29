import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleEntity } from './entities/module.entity';
import { Repository } from 'typeorm';
import { CoursesService } from 'src/courses/courses.service';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(ModuleEntity)
    private moduleRepo: Repository<ModuleEntity>,
    private courseService: CoursesService,
  ) {}
  async create(createModuleDto: CreateModuleDto | any) {
    await this.courseService.findOne(createModuleDto.courseId);
    const module = this.moduleRepo.create(createModuleDto);
    return await this.moduleRepo.save(module);
  }

  async findOne(id: number) {
    const module= await this.moduleRepo.findOne({ where: { id } });
    if(!module) throw new NotFoundException("Module topilmadi")
      return module
  }

  update(id: number, updateModuleDto: UpdateModuleDto) {
    return `This action updates a #${id} module`;
  }

  remove(id: number) {
    return `This action removes a #${id} module`;
  }
}
