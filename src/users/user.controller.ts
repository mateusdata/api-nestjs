import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserInput } from "./dtos/createUserInput.dto";
import { UpdateUserInput } from "./dtos/updateUserInput.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Usuarios")
@Controller("/users")
export class UserController {

    constructor(private userServices: UserService) { }

    @Get('/')
    findAll() {
        return this.userServices.findAll()
    }

    @Get(":id")
    findById(@Param("id", ParseIntPipe) id: number) {
        return this.userServices.findById(id)
    }

    @Post("")
    create(@Body() body: CreateUserInput) {
        return this.userServices.create(body)
    }

    @Put(":id")
    update(@Param("id", ParseIntPipe) id: number, @Body() body: UpdateUserInput) {
        return this.userServices.update(id, body)
    }

}
