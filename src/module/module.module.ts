import { forwardRef, Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleEntity } from './entities/module.entity';
import { CoursesModule } from 'src/courses/courses.module';
import { LessonsModule } from 'src/lessons/lessons.module';

@Module({
  imports:[TypeOrmModule.forFeature([ModuleEntity]),CoursesModule,forwardRef(() => LessonsModule),],
  controllers: [ModuleController],
  providers: [ModuleService],
  exports:[ModuleService],
})
export class ModuleModule {}
