import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './services/courses.service';

@Module({
    controllers: [CoursesController],
    providers: [CoursesService],
    // Permite que o serviço seja acessado por outros módulos
    exports: [CoursesService]
})
export class CoursesModule {}
