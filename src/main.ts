import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import connectDatabase from 'prisma/connectDatabase';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  connectDatabase()
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove campos não definidos no DTO
    forbidNonWhitelisted: true, // Lança erro se houver campos desconhecidos
    transform: true, // Transforma a payload para os tipos esperados no DTO
    forbidUnknownValues: true, // Gera erro se algum valor estiver faltando ou desconhecido
    skipMissingProperties: false, // Não pula validação de propriedades faltantes
    errorHttpStatusCode: 400, // Define o código de erro como 400 (Bad Request)
  }));
  
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