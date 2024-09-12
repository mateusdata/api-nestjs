import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TodoListService } from "./todolist.service";
import { CreateTodoListDto } from "./dto/create-tudolist.dto";
import { UpdateTodoListDto } from "./dto/update-tudolist.dto";
import { ApiAcceptedResponse, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";



@ApiTags("Grud de todo list")
@Controller("/todolist")
export class TodoListController {
    constructor(private readonly tudoListService: TodoListService) { }


    @ApiOperation({ summary: 'Criar uma nova todolist' })  // Descrição do método POST
    @ApiBody({ type: CreateTodoListDto, description: 'Body necessário para criar uma nova Todo List' }) // Detalha o corpo da requisição
    @ApiAcceptedResponse({schema:{example:"Mateus dos santos silva"}})
    @ApiOkResponse({ description: 'Login bem-sucedido. Retorna o token.' }) 
    @Post("")
    create(@Body() createTodoList: CreateTodoListDto) {
        return this.tudoListService.create(createTodoList);
    }

    @Get()
    findAll() {
        return this.tudoListService.findAll();
    }

    @Get()
    findOne(@Param("id") id: string) {
        return this.tudoListService.findOne(+id);
    }

    @Patch()
    update(@Param("id") id: string, @Body() updateTodoListDto: UpdateTodoListDto) {
        return this.tudoListService.update(+id, updateTodoListDto);
    }

    @Delete()
    remover(@Param("id") id: string) {
        return this.tudoListService.remover(+id)
    }

}