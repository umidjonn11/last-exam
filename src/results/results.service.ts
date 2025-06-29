// import {
//   forwardRef,
//   Inject,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { CreateResultDto } from './dto/create-result.dto';
// import { UpdateResultDto } from './dto/update-result.dto';
// import { Request } from 'express';
// import { AssignmentsModule } from 'src/assignments/assignments.module';

// @Injectable()
// export class ResultsService {
//   constructor(
//     @Inject(forwardRef(() => AssignmentsModule)) private assgn: AssignmentsModule,
   
//   ) {}
//   // async result(req: Request) {
//   //   const id = req.user?.id;
//   //   if (!id) throw new UnauthorizedException('Please login');
//   //   const asnCache = await this.redis.get(`asn:id:${id}`);
//   //   console.log(asnCache);
//   //   const asn = await this.assgn.findOne(id);
//   //   await this.redis.set(`asn:id:${id}`, asn, 60);

//   //   return asn;
//   // }
// }