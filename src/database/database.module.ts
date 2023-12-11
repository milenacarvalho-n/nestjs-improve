/* eslint @typescript-eslint/no-var-requires: "off" */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';
import { DataSourceOptions } from 'typeorm';

require('dotenv').config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: String(process.env.USERNAME),
  password: String(process.env.PASSWORD),
  database: String(process.env.DBNAME),
  entities: [Course, Tag],
  // nunca utilizar em produção como true: os dados serão apagados e recriados a cada reinicialização do servidor
  synchronize: false,
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          // spread operator
          ...dataSourceOptions,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
