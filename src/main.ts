import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import connectDatabase from 'prisma/connectDatabase';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  connectDatabase()
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Minha documentação')
    .setDescription('Documentação completa da api mateus-data')
    .setVersion('1.0')
    .addTag('Documentação da api')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  
  await app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
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