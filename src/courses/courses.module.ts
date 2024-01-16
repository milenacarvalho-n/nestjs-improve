import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './services/courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/courses.entity';
import { Tag } from './entities/tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Tag])],
  controllers: [CoursesController],
  providers: [CoursesService],
  // Permite que o serviço seja acessado por outros módulos
  exports: [CoursesService],
})
export class CoursesModule {}
