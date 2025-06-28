import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateModuleDto {
  @IsString()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  courseId: number;
}
