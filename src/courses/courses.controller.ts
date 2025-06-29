import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, BadRequestException } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { RolesGuard } from 'src/security/roles-guard';
import { Roles } from 'src/security/roles.decorator';
import { UserRole } from 'src/security/roles.enum';
import { AuthGuard } from 'src/security/auth-guard';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { UserService } from 'src/auth/auth.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @ApiBearerAuth()
  @ApiOperation({summary: "Create Courses"})
  @UseGuards(AuthGuard,RolesGuard)
  @Roles(UserRole.admin)
  @Post("create")
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get('getAll')
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }

  @Get(':id/modules')
  findLessons(@Param('id') id: string) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid module ID');
    }
    return this.coursesService.getModules(numericId);
  }
}
