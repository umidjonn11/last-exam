import {
    Controller,
    Post,
    Body,
    UseGuards,
    Get,
    Req,
  } from '@nestjs/common';
  import {
    ApiBearerAuth,
    ApiOperation,
    ApiTags,
  } from '@nestjs/swagger';
  import { Request } from 'express';
  import { CreateEnrollmentDto } from './dtos/enrollment-create.dto';
  import { EnrollmentsService } from './enrollment.service';
import { UserRole } from 'src/security/roles.enum';
import { Roles } from 'src/security/roles.decorator';
import { RolesGuard } from 'src/security/roles-guard';
import { AuthGuard } from 'src/security/auth-guard';
  
  interface AuthRequest extends Request {
    user: { id: number };
  }
  
  @ApiTags('Enrollments')
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Controller('enrollments')
  export class EnrollmentsController {
    constructor(
      private readonly enrollmentsService: EnrollmentsService,
    ) {}
  
    @ApiOperation({ summary: 'Enroll in a course' })
    @Roles(UserRole.admin)
    @Post()
    create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
      return this.enrollmentsService.create(createEnrollmentDto);
    }
  
    @ApiOperation({ summary: 'Get user enrollments' })
    @Roles(UserRole.user,UserRole.admin)
    @Get()
    getEnrollments(@Req() req: AuthRequest) {
      return this.enrollmentsService.getEnrolls(req);
    }
  }
  