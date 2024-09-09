import { Module } from "@nestjs/common";
import { TodoListController } from "./todolist.controller";
import { TodoListService } from "./todolist.service";
import { PrismaService } from "src/prisma.service";

@Module({
    controllers:[TodoListController],
    providers:[TodoListService, PrismaService]
})
export class TodoListModule {}