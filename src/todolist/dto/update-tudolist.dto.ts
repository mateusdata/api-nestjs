import { PartialType } from "@nestjs/mapped-types";
import { CreateTodoListDto } from "./create-tudolist.dto";

export class UpdateTodoListDto extends PartialType(CreateTodoListDto) { }