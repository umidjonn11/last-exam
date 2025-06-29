// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
//   Req,
//   UseGuards,
// } from '@nestjs/common';
// import { ResultsService } from './results.service';

// import { Request } from 'express';
// import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

// @Controller('results')
// export class ResultsController {
//   constructor(private readonly resultsService: ResultsService) {}

//   @ApiOperation({ summary: 'see results' })
//   @ApiBearerAuth()
//   @Get()
//   getresults(@Req() req: Request) {
//     // return this.resultsService.result(req);
//   }
// }