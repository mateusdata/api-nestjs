import { Module } from '@nestjs/common';
import { MeuWebSocksService } from './meu-web-socks.service';
import { MeuWebSocksGateway } from './meu-web-socks.gateway';

@Module({
  providers: [MeuWebSocksGateway, MeuWebSocksService],
})
export class MeuWebSocksModule {}
