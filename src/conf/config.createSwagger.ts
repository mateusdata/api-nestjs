import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export async function createSwagger(app:any) {
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
  document.components.schemas = {}; 

  
  SwaggerModule.setup('/', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customCss: `
      .swagger-ui .topbar {
        background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwG_TFnQOVq3CCRN3euHJN-moi6PiT9Uy_Fw&s') no-repeat center center;
        background-size: contain;
        
        background: #892FAF
      }
    `,
  });
}