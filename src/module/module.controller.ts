import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { ModuleService } from './module.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('module')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Post()
  @ApiOperation({ summary: 'Create a Module' })
  create(@Body() createModuleDto: CreateModuleDto) {
    return this.moduleService.create(createModuleDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'get module by id' })
  findOne(@Param('id') id: string) {
    return this.moduleService.findOne(+id);
  }

  @Get(':id/lessons')
  @ApiOperation({ summary: 'find lesson in modules' })
  findLessons(@Param('id') id: string) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid module ID');
    }
    return this.moduleService.getLessons(numericId);
  }
}
