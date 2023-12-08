import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tags.entity";

// dentro do decorator eu posso passar como parâmetro o nome que quero para minha tabela
@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable()
  @ManyToMany(() => Tag, tag => tag.courses, { 
    cascade: true,    
  })
  tags: Tag[];
}
