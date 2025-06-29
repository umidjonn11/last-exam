import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateEnrollmentDto } from './dtos/enrollment-create.dto';
import { EnrollmentsService } from './enrollment.service';

@ApiBearerAuth()
// @UseGuards(JwtGuard, RolesGuard)
@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @ApiOperation({ summary: 'enroll a course' })
//   @Roles(UserRole.ADMIN)
  @Post()
  create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentsService.create(createEnrollmentDto);
  }

  @ApiOperation({ summary: 'get enrollments' })
//   @Roles(UserRole.USER)
  @Get()
  getEnrollments(@Req() req: Request) {
    return this.enrollmentsService.getEnrolls(req);
  }
}