import { Test, TestingModule } from '@nestjs/testing';
import { PostsSocketGateway } from './posts-socket.gateway';
import { PostsSocketService } from './posts-socket.service';

describe('PostsSocketGateway', () => {
  let gateway: PostsSocketGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsSocketGateway, PostsSocketService],
    }).compile();

    gateway = module.get<PostsSocketGateway>(PostsSocketGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
