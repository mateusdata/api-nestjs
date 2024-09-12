import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("Grud de Usuarios")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
