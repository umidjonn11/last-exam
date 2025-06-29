import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { ModuleModule } from 'src/module/module.module';

@Module({
  imports:[TypeOrmModule.forFeature([Lesson]),ModuleModule],
  controllers: [LessonsController],
  providers: [LessonsService],
})
export class LessonsModule {}
