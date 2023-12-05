import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './services/courses.service';
import { CreateCourseDTO } from './dto/create-course-dto';
import { UpdateCourseDTO } from './dto/update-course-dto';

@Controller('courses')
export class CoursesController {
  // O readonly garante a Imutabilidade: em seu conceito mais simples é algo que não pode ser alterado
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.courseService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDTO) {
    return this.courseService.create(createCourseDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDTO) {
    return this.courseService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.courseService.remove(id);
  }
}
