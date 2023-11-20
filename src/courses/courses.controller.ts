import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
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
