import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Assignment } from './entities/assignment.entity';
import { Repository } from 'typeorm';
import { ModuleService } from 'src/module/module.service';

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectRepository(Assignment)
    private assignmentRepo: Repository<Assignment>,
    private moduleService: ModuleService,
  ) {}
  async create(createAssignmentDto: CreateAssignmentDto | any) {
    const module = await this.moduleService.findOne(
      createAssignmentDto.moduleId,
    );
    const assignment = await this.assignmentRepo.create(createAssignmentDto);
    return this.assignmentRepo.save(assignment);
  }

  findOne(id: number) {
    return `This action returns a #${id} assignment`;
  }
}
