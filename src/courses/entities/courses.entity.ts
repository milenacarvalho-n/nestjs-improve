import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// dentro do decorator eu posso passar como parâmetro o nome que quero para minha tabela
@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('json', { nullable: true })
  tags: string[];
}
