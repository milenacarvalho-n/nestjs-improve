import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from '../entities/courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'NodeJS',
      description: 'Curso básico sobre nodejs',
      tags: ['basic', 'nodejs', 'javascript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    const course = this.courses.find((course) => course.id == id);
    if (!course) {
      throw new HttpException(
        `Course with ID: ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return course;
  }

  create(createCourseDTO: any) {
    return this.courses.push(createCourseDTO);
  }

  update(id: number, updateCourseDTO: any) {
    const existing = this.findOne(id);

    if (existing as any) {
      const index = this.courses.findIndex((course) => course.id === id);
      this.courses[index] = {
        id,
        ...updateCourseDTO,
      };
    }
  }

  remove(id: number) {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index >= 0) {
      this.courses.splice(index, 1);
    }
  }
}
