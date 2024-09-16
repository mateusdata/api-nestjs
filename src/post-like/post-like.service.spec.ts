import { PrismaService } from './../prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { PostLikeService } from './post-like.service';

describe('PostLikeService', () => {
  let service: PostLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostLikeService, PrismaService],
    }).compile();

    service = module.get<PostLikeService>(PostLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
