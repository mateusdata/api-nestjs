import { Test, TestingModule } from '@nestjs/testing';
import { CommentLikeController } from './comment-like.controller';
import { CommentLikeService } from './comment-like.service';
import { PrismaService } from '../prisma/prisma.service';

describe('CommentLikeController', () => {
  let controller: CommentLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentLikeController],
      providers: [CommentLikeService, PrismaService],
    }).compile();

    controller = module.get<CommentLikeController>(CommentLikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
