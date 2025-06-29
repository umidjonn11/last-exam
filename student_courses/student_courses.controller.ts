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
 
  
  @ApiBearerAuth()
//   @UseGuards(Authhua, RolesGuard)
  @Controller('student-courses')
  export class StudentCoursesController {
    constructor(private readonly studentCoursesService: StudentCoursesService) {}
  
    @ApiOperation({ summary: 'create student course' })
    // @Roles(UserRole.ADMIN, UserRole.USER)
    @Post()
    create(@Body() createStudentCourseDto: CreateStudentCourseDto) {
      return this.studentCoursesService.create(createStudentCourseDto);
    }
    @ApiOperation({ summary: 'get student course' })
    // @Roles(UserRole.ADMIN, UserRole.USER)
    @Get(':studentId')
    findAll(@Param('studentId') studentId: number) {
      return this.studentCoursesService.findAll(studentId);
    }
  }