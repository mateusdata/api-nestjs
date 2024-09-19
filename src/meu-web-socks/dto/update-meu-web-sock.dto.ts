import { PartialType } from '@nestjs/mapped-types';
import { CreateMeuWebSockDto } from './create-meu-web-sock.dto';

export class UpdateMeuWebSockDto extends PartialType(CreateMeuWebSockDto) {
  id: number;
}
