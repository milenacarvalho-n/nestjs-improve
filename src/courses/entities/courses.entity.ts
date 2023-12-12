import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './tags.entity';
import { randomUUID } from 'node:crypto';

// dentro do decorator eu posso passar como parâmetro o nome que quero para minha tabela
@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable()
  @ManyToMany(() => Tag, (tag) => tag.courses, {
    cascade: true,
  })
  tags: Tag[];

  @CreateDateColumn({ type: 'timestamp'})
  created_at: Date;

  @BeforeInsert()
  generatedID(){
    if(!this.id){
      this.id = randomUUID()
    }
    return this.id
  }
}
