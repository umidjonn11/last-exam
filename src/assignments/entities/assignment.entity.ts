// src/assignments/entities/assignment.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { Result } from '../../results/entities/result.entity';
import { UserRepository } from 'src/auth/entities/auth.entity';
import { ModuleEntity } from 'src/module/entities/module.entity';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @ManyToOne(() => ModuleEntity,{ onDelete: 'CASCADE',})
  moduleId: ModuleEntity;



//   @OneToOne(() => Result, (result) => result.assignment)
//   result: Result;
}