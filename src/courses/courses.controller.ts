import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
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
  @ApiOperation({ summary: 'Create Courses' })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRole.admin)
  @Post('create')
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get All courses' })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRole.admin)
  @Get('getAll')
  findAll() {
    return this.coursesService.findAll();
  }
  @ApiOperation({ summary: 'Get courses by Id ' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update courses' })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRole.admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a course' })
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRole.admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }

  @Get(':id/modules')
  @ApiOperation({ summary: 'find lessons from Courses' })
  findLessons(@Param('id') id: string) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid module ID');
    }
    return this.coursesService.getModules(numericId);
  }
}
