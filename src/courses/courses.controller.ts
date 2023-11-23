import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './services/courses.service';


@Controller('courses')
export class CoursesController {
    // O readonly garante a Imutabilidade: em seu conceito mais simples é algo que não pode ser alterado
    constructor(private readonly courseService: CoursesService){}

    @Get()
    findAll(){
        return this.courseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.courseService.findOne(id);
    }

    @Post()
    create(@Body() body: any){
        return this.courseService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: any){
        return this.courseService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id : number){
        return this.courseService.remove(id);
    }
}
