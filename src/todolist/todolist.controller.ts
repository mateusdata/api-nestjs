import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TodoListService } from "./todolist.service";
import { CreateTodoListDto } from "./dto/create-tudolist.dto";
import { UpdateTodoListDto } from "./dto/update-tudolist.dto";

@Controller("/todolist")
export class TodoListController {
    constructor(private readonly tudoListService: TodoListService) { }

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
        return this.tudoListService.findOne(id);
    }

    @Patch()
    update(@Param("id") id: string, @Body() updateTodoListDto: UpdateTodoListDto) {
        return this.tudoListService.update(id, updateTodoListDto);
    }

    @Delete()
    remover(@Param("id") id: string) {
        return this.tudoListService.remover(id)
    }

}