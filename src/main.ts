import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

// ao utilizar o whitelist apenas as devidas propriedades listadas passam, já o forbidNonWhitelisted retorna um BadRequest se algo indesejado for enviado
// transform pega o payload e faz a transformação da tipagem
