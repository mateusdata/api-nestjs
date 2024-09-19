import { Test, TestingModule } from '@nestjs/testing';
import { MeuWebSocksService } from './meu-web-socks.service';

describe('MeuWebSocksService', () => {
  let service: MeuWebSocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeuWebSocksService],
    }).compile();

    service = module.get<MeuWebSocksService>(MeuWebSocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
