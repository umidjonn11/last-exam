import { forwardRef, Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { ModuleModule } from 'src/module/module.module';

@Module({
  imports:[TypeOrmModule.forFeature([Lesson]), forwardRef(() => ModuleModule),],
  controllers: [LessonsController],
  providers: [LessonsService],
  exports:[LessonsService]
})
export class LessonsModule {}
