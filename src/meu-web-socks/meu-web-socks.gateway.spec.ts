import { Test, TestingModule } from '@nestjs/testing';
import { MeuWebSocksGateway } from './meu-web-socks.gateway';
import { MeuWebSocksService } from './meu-web-socks.service';

describe('MeuWebSocksGateway', () => {
  let gateway: MeuWebSocksGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeuWebSocksGateway, MeuWebSocksService],
    }).compile();

    gateway = module.get<MeuWebSocksGateway>(MeuWebSocksGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
