import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { MeuWebSocksService } from './meu-web-socks.service';
import { CreateMeuWebSockDto } from './dto/create-meu-web-sock.dto';
import { UpdateMeuWebSockDto } from './dto/update-meu-web-sock.dto';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class MeuWebSocksGateway {
  constructor(private readonly meuWebSocksService: MeuWebSocksService) { }

  @SubscribeMessage('createMeuWebSock')
  create(@MessageBody() createMeuWebSockDto: CreateMeuWebSockDto) {
    return this.meuWebSocksService.create(createMeuWebSockDto);
  }

  @SubscribeMessage('mateus')
  handleEvent(@ConnectedSocket() client: Socket, @MessageBody() data: string): void {
    client.emit('mateus', 'Iai ' + data);
  }


  @SubscribeMessage('findAllMeuWebSocks')
  findAll() {
    return this.meuWebSocksService.findAll();
  }

  @SubscribeMessage('findOneMeuWebSock')
  findOne(@MessageBody() id: number) {
    return this.meuWebSocksService.findOne(id);
  }

  @SubscribeMessage('updateMeuWebSock')
  update(@MessageBody() updateMeuWebSockDto: UpdateMeuWebSockDto) {
    return this.meuWebSocksService.update(updateMeuWebSockDto.id, updateMeuWebSockDto);
  }

  @SubscribeMessage('removeMeuWebSock')
  remove(@MessageBody() id: number) {
    return this.meuWebSocksService.remove(id);
  }

}
