import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './services/courses.service';

@Controller('courses')
export class CoursesController {
    // O readonly garante a Imutabilidade: em seu conceito mais simples é algo que não pode ser alterado
    constructor(private readonly courseService: CoursesService){}

    @Get()
    findAll(){
        return "Listagem de cursos";
    }

    @Get(':id')
    findOne(@Param() params){
        return `Curso com ID ${params.id}`;
    }

    @Post()
    create(@Body() body){
        return body;
    }

    @Patch(':id')
    update(@Param() id: string){
        return `Update course with ID: ${id}`
    }

    @Delete(':id')
    remove(@Param() id : string){
        return `Remove course with ID: ${id}`
    }
}
