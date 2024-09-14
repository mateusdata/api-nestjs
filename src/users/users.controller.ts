import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/users')
@ApiTags("Grud de Usuarios")

export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  

  @Post("")
  create(@Body() createUser: CreateUserDto) {
    
    return this.usersService.create(createUser)
  }

  @Get("")
  findAll() {
    return this.usersService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto)
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT) 
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id)
  }
}
