import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { customCss } from "./customCss";
import { customCssDark } from "./customCssDark";


export async function createSwagger(app: any) {
  const options = new DocumentBuilder()
    .setTitle('Documentação API Papacapim')
    .setDescription('Documentação completa da api mateus-data')
    .setVersion('1.0')
    .addTag('Documentação da api')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'token',
    )
    .addSecurityRequirements('token')
    .build();


  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customCss: customCssDark
  });

  SwaggerModule.setup('/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customCss: customCss
  });



}