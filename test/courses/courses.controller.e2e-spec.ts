import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { Course } from './../../src/courses/entities/courses.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Tag } from './../../src/courses/entities/tags.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './../../src/courses/courses.module';
import request from 'supertest';

describe('CoursesController e2e tests', () => {
  let app: INestApplication;
  let module: TestingModule;
  let data: any;
  let courses: Course[];

  const dataSourceTest: DataSourceOptions = {
    type: 'postgres',
    host: process.env.HOST,
    port: 5433,
    username: String(process.env.USERNAME),
    password: String(process.env.PASSWORD),
    database: String(process.env.DBNAME),
    entities: [Course, Tag],
    synchronize: true,
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        CoursesModule,
        TypeOrmModule.forRootAsync({
          useFactory: async () => {
            return {
              ...dataSourceTest,
            };
          },
        }),
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    data = {
      name: 'Course 1',
      description: 'Description 1',
      tags: ['Tag 1', 'Tag 2'],
    };
  });

  beforeEach(async () => {
    const dataSource = await new DataSource(dataSourceTest).initialize();
    const repository = await dataSource.getRepository(Course);
    courses = await repository.find();

    await dataSource.destroy();
  });

  afterAll(async() => {
    await module.close();
  })

  describe('POST /courses', () => {
    it('should create a course', async () => {
      const res = await request(app.getHttpServer())
        .post('/courses')
        .send(data)
        .expect(201);
      console.log(res.body);

      expect(res.body.id).toBeDefined();
      expect(res.body.name).toEqual(data.name);
      expect(res.body.description).toEqual(data.description);
      expect(res.body.created_at).toBeDefined();
      expect(res.body.tags[0].name).toEqual(data.tags[0]);
      expect(res.body.tags[1].name).toEqual(data.tags[1]);
    });
  });
});
