import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
  } from '@nestjs/common';
  import { StudentCoursesService } from './student_courses.service';
  import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { RolesGuard } from 'src/security/roles-guard';
import { CreateStudentCourseDto } from './dto/create.student_courses-dto';
import { Roles } from 'src/security/roles.decorator';
import { UserRole } from 'src/security/roles.enum';
import { AuthGuard } from 'src/security/auth-guard';
 
  
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Controller('student-courses')
  export class StudentCoursesController {
    constructor(private readonly studentCoursesService: StudentCoursesService) {}
  
    @ApiOperation({ summary: 'create student course' })
    @Roles(UserRole.admin,UserRole.user)
    @Post()
    create(@Body() createStudentCourseDto: CreateStudentCourseDto) {
      return this.studentCoursesService.create(createStudentCourseDto);
    }
    @ApiOperation({ summary: 'get student course' })
    @Roles(UserRole.admin,UserRole.user)
    @Get(':studentId')
    findAll(@Param('studentId') studentId: number) {
      return this.studentCoursesService.findAll(studentId);
    }
  }