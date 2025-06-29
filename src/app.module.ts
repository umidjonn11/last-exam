import { Module } from '@nestjs/common';
import { ModuleModule } from './module/module.module';
import { UserModule } from './auth/auth.module';
import { LessonsModule } from './lessons/lessons.module';
import { CoursesModule } from './courses/courses.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { ResultsModule } from './results/results.module';
import { UserRepository } from './auth/entities/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './courses/entities/course.entity';
import { RolesGuard } from './security/roles-guard';
import { AuthGuard } from './security/auth-guard';

@Module({
  imports: [ModuleModule, UserModule, LessonsModule, CoursesModule, AssignmentsModule, ResultsModule,
    TypeOrmModule.forRoot({
      host: process.env.DB_HOST||'localhost',
      username: process.env.DB_USERNAME||'postgres',
      port: parseInt(process.env.DB_PORT as string)||5432,
      database:  process.env.DB_DATABASE||"umid",
      password: process.env.DB_PASSWORD||'umidjon06',
      type: 'postgres',
      synchronize: true,
      entities: [UserRepository,Course],
      autoLoadEntities: true,

    }),
  ],
  controllers: [],
  providers: [ ],
})
export class AppModule {}


