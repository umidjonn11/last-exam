// src/lessons/entities/lesson.entity.ts
import { ModuleEntity } from 'src/module/entities/module.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string; 

  @ManyToOne(() => ModuleEntity)
  moduleId: ModuleEntity;

}