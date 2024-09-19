import { Test, TestingModule } from '@nestjs/testing';
import { PostsSocketService } from './posts-socket.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('PostsSocketService', () => {
  let service: PostsSocketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsSocketService , PrismaService],
    }).compile();

    service = module.get<PostsSocketService>(PostsSocketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
