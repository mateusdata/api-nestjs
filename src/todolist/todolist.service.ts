import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateTodoListDto } from "./dto/create-tudolist.dto";
import { UpdateTodoListDto } from "./dto/update-tudolist.dto";
import { PrismaService } from "src/prisma.service";
import { } from "rxjs";

@Injectable()
export class TodoListService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createTodo: CreateTodoListDto) {
        try {
            return await this.prisma.todoList.create({
                data: createTodo,
            });
        } catch (error) {
            if (error.code === 'P2002') {
                // Aqui você pode adicionar mais lógica para identificar qual campo causou o conflito
                throw new ConflictException('Descrição já existe');
            }
            throw error; // Re-throw se não for o erro que estamos esperando
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
            data: updateTodoListDto,
            where: {
                id: id
            }
        })
    }

    async remover(id: number) {
        return await this.prisma.todoList.delete({
            where: {
                id: id
            }
        })
    }
}