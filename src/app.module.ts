// src/app.module.ts
import { Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { LoggingInterceptor } from './logging.interceptor';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { CommentLikeModule } from './comment-like/comment-like.module';
import { PostLikeModule } from './post-like/post-like.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PostsModule,
    CommentsModule,
    CommentLikeModule,
    PostLikeModule,
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
})
export class AppModule { }
