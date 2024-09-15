import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import connectDatabase from './database/connectDatabase';
import { createSwagger } from './conf/config.createSwagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  app.useGlobalPipes(new ValidationPipe());
  createSwagger(app)


  connectDatabase()
  await app.listen(3000, () => {
    console.warn(`Servidor rodando em ${process.env.SERVER_URL} 🎉`)
  });

}
bootstrap();
























































































































































/*

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import connectDatabase from 'prisma/connectDatabase';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  
  // Conectar ao banco de dados
  connectDatabase();
  
  // Usar o ValidationPipe globalmente
  app.useGlobalPipes(new ValidationPipe());
  
  // Configurar para ouvir em todas as interfaces (0.0.0.0)
  await app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor rodando na porta 3000 com Fastify');
  });
}

bootstrap();


*/