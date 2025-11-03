// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();

// import { ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import * as dotenv from 'dotenv';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   dotenv.config();
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
//   const port = process.env.PORT || 3000;
//   await app.listen(port);
//   console.log(`API escuchando en http://localhost:${port}`);
// }
// bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  // Habilita CORS usando la configuración de tu guía de ejemplo
  app.enableCors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500' ], 
    
    methods: ['GET', 'POST'], 
    
    // Encabezados permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], 
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`API escuchando en http://localhost:${port}`);
}
bootstrap();