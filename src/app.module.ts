import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/services/courses.service';

@Module({
  imports: [],
  controllers: [AppController, CoursesController],
  providers: [AppService, CoursesService],
})
export class AppModule {}
