import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateTodoListDto } from "./dto/create-tudolist.dto";
import { UpdateTodoListDto } from "./dto/update-tudolist.dto";
import { PrismaService } from "src/prisma.service";
import { } from "rxjs";

@Injectable()
export class TodoListService {
    constructor(private readonly prisma: PrismaService) { }
    async create(todoListService: CreateTodoListDto) {
        try {
            const tudolist = await this.prisma.todoList.create({
                data: todoListService
            })
            console.log("Não deu deu erro");
            return tudolist;

        } catch (error) {
            console.log("deu erro");

            return new InternalServerErrorException("Ocorreu um erro no servidor");
        }
    }

    async findAll() {
        return await this.prisma.todoList.findMany()
    }

    async findOne(id: number) {
        return await this.prisma.todoList.findFirst({
            where: {
                id: id
            }
        })
    }

    async update(id: number, updateTodoListDto: UpdateTodoListDto) {
           return await this.prisma.todoList.update({
            data:updateTodoListDto,
            where: {
                id: id
            }
        })
    }

    async remover(id: number) {
        return await this.prisma.todoList.delete({
            where:{
                id: id
            }
        })
    }
}