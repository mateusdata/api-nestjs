import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class CreateTodoListDto {
    
    @ApiProperty({ description: 'Título da lista de tarefas', example: 'Minha lista de tarefas' })
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(255)
    title: string

    @ApiProperty({ description: 'Descrição da lista de tarefas', example: 'Uma descrição detalhada' })
    description: string
}