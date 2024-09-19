import { Injectable } from '@nestjs/common';
import { CreateMeuWebSockDto } from './dto/create-meu-web-sock.dto';
import { UpdateMeuWebSockDto } from './dto/update-meu-web-sock.dto';

@Injectable()
export class MeuWebSocksService {
  create(createMeuWebSockDto: CreateMeuWebSockDto) {
    return 'This action adds a new meuWebSock';
  }

  findAll() {
    return `This action returns all meuWebSocks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meuWebSock`;
  }

  update(id: number, updateMeuWebSockDto: UpdateMeuWebSockDto) {
    return `This action updates a #${id} meuWebSock`;
  }

  remove(id: number) {
    return `This action removes a #${id} meuWebSock`;
  }
}
