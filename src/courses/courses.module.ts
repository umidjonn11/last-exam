import { forwardRef, Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { todo } from 'node:test';
import { Course } from './entities/course.entity';
import { UserModule } from 'src/auth/auth.module';
import { ModuleModule } from 'src/module/module.module';

@Module({
  imports:[TypeOrmModule.forFeature([Course]), UserModule,forwardRef(() => ModuleModule),],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports:[CoursesService]
})
export class CoursesModule {}
