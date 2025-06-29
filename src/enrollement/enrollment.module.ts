import { forwardRef, Module } from '@nestjs/common';
import { CoursesModule } from 'src/courses/courses.module';
import { Enrollment } from './entitiees/enrollment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnrollmentsController } from './enrollment.controller';
import { EnrollmentsService } from './enrollment.service';
import { UserRepository } from 'src/auth/entities/auth.entity';
import { UserModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Enrollment]),
    forwardRef(() => CoursesModule),
    forwardRef(() => UserModule),
  ],
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService],
  exports:[EnrollmentsService]
})
export class EnrollmentsModule {}