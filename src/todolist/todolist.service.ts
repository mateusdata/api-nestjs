import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateTodoListDto } from "./dto/create-tudolist.dto";
import { UpdateTodoListDto } from "./dto/update-tudolist.dto";
import { PrismaService } from "src/prisma.service";
import { NotFoundError } from "rxjs";

@Injectable()
export class TodoListService {
    constructor(private readonly prisma: PrismaService){}
    async create(todoListService: CreateTodoListDto) {
        try {
            const tudolist =  await this.prisma.todoList.create({
                data:todoListService
            })
            console.log("Não deu deu erro");
            return tudolist;

        } catch (error) {
            console.log("deu erro");
    
            return new InternalServerErrorException("Ocorreu um erro no servidor");
        }
    }

    findAll() {
        return 10
    }

    findOne(id: string) {
        return id
    }

    update(id: string, updateTodoListDto: UpdateTodoListDto) {
        return updateTodoListDto
    }

    remover(id: string) {
        return id
    }
}