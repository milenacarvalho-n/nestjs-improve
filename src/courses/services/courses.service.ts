import { Injectable } from '@nestjs/common';
import { Course } from '../entities/courses.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: "NodeJS",
            description: 'Curso básico sobre nodejs',
            tags: ['basic','nodejs', 'javascript'],

        }
    ]

    findAll(){
       return this.courses
    }
}
