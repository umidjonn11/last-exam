import { Module } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { AssignmentsController } from './assignments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assignment } from './entities/assignment.entity';
import { ModuleModule } from 'src/module/module.module';

@Module({
  imports:[TypeOrmModule.forFeature([Assignment]),ModuleModule],
  controllers: [AssignmentsController],
  providers: [AssignmentsService],
  exports:[AssignmentsService]
})
export class AssignmentsModule {}
