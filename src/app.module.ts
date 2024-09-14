// src/app.module.ts
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { LoggingInterceptor } from './logging.interceptor';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { PrismaService } from './prisma.service';
import { TesteController } from './teste/teste.controller';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PostsModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    JwtService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthMiddleware,
    },
  ],
  exports: [PrismaService],
  controllers: [TesteController],
})
export class AppModule {}
