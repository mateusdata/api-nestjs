import { Test, TestingModule } from '@nestjs/testing';
import { PostsSocketService } from './posts-socket.service';

describe('PostsSocketService', () => {
  let service: PostsSocketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsSocketService],
    }).compile();

    service = module.get<PostsSocketService>(PostsSocketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
