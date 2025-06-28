import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserRepository } from 'src/auth/entities/auth.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the course',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'Advanced NestJS',
    description: 'The name of the course',
    required: true,
  })
  name: string;

  @Column('text')
  @ApiProperty({
    example: 'Master NestJS with advanced techniques',
    description: 'Detailed description of the course',
    required: false,
  })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  @ApiProperty({
    example: 99.99,
    description: 'Price of the course in USD',
    required: true,
  })
  price: number;

  //   @Column()
  //   @ApiProperty({
  //     example: 'John Doe',
  //     description: 'Name of the course instructor',
  //     required: true,
  //   })
  //   teacher: string;

  @Column()
  @ApiProperty({
    example: 'Web Development',
    description: 'Category of the course',
    required: true,
    enum: ['Web Development', 'Mobile Development', 'Data Science', 'Design'],
  })
  category: string;

  @Column()
  @ApiProperty({
    example: 'Intermediate',
    description: 'Difficulty level of the course',
    required: true,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
  })
  level: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty({
    example: '2023-05-20T12:00:00.000Z',
    description: 'Timestamp when course was created',
    required: false,
  })
  createdAt: Date;

  @ApiProperty({ example: 1, description: 'this is a teacher', required: true })
  @ManyToOne(() => UserRepository)
  teacher: UserRepository;
}
