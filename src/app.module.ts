import { Module } from '@nestjs/common';
import { ModuleModule } from './module/module.module';
import { UserModule } from './auth/auth.module';
import { LessonsModule } from './lessons/lessons.module';
import { CoursesModule } from './courses/courses.module';
import { AssignmentsModule } from './assignments/assignments.module';
// import { ResultsModule } from './results/results.module';
import { UserRepository } from './auth/entities/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './courses/entities/course.entity';
import { RolesGuard } from './security/roles-guard';
import { AuthGuard } from './security/auth-guard';
import { ModuleEntity } from './module/entities/module.entity';
import { Assignment } from './assignments/entities/assignment.entity';
import { Lesson } from './lessons/entities/lesson.entity';
import { StudentCourse } from './student_courses/entities/student_courses.entity';
import { StudentCoursesModule } from './student_courses/student_courses.module';
import { EnrollmentsModule } from './enrollement/enrollment.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ModuleModule, UserModule, LessonsModule, CoursesModule, AssignmentsModule,StudentCoursesModule,EnrollmentsModule,ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      host: process.env.DB_HOST||'localhost',
      username: process.env.DB_USERNAME||'postgres',
      port: parseInt(process.env.DB_PORT as string)||5432,
      database:  process.env.DB_DATABASE||"umid",
      password: process.env.DB_PASSWORD||'umidjon06',
      type: 'postgres',
      synchronize: true,
      entities: [UserRepository,Course,ModuleEntity,Assignment,StudentCourse,Lesson],
      autoLoadEntities: true,

    }),
  ],
  controllers: [],
  providers: [ ],
})
export class AppModule {}


