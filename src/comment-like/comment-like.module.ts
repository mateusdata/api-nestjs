import { Module } from '@nestjs/common';
import { CommentLikeService } from './comment-like.service';
import { CommentLikeController } from './comment-like.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CommentLikeController],
  providers: [CommentLikeService],
})
export class CommentLikeModule { }
