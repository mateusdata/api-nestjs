import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import connectDatabase from './database/connectDatabase';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  
  connectDatabase()
  app.useGlobalPipes(new ValidationPipe({
   
  }));
  
  const options = new DocumentBuilder()
    .setTitle('Minha documentação')
    .setDescription('Documentação completa da api mateus-data')
    .setVersion('1.0')
    .addTag('Documentação da api')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document, {
    customCss: `
      .swagger-ui .topbar {
        background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwG_TFnQOVq3CCRN3euHJN-moi6PiT9Uy_Fw&s') no-repeat center center;
        background-size: contain;
        
        background: #892FAF
      }
    `,
  });
  connectDatabase()

  await app.listen(3000, () => {

    console.dir(`servidor rodando em ${process.env.SERVER_URL}`)
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