import { IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class CreateTodoListDto {
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(15)
    title: string
    description: string
}