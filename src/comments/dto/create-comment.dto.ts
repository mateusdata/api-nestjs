import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDto {

    @ApiProperty()
    @IsString({ message: 'A mensagem deve ser uma string' })
    @IsNotEmpty({ message: 'A mensagem é obrigatória' })
    message: string;

    @ApiProperty()
    @IsInt({ message: 'O ID do post deve ser um número inteiro' })
    @IsNotEmpty({ message: 'O ID do post é obrigatório' })
    postId: number;

    @ApiProperty()
    @IsInt({ message: 'O ID do usuário deve ser um número inteiro' })
    @IsNotEmpty({ message: 'O ID do usuário é obrigatório' })
    userId: number;
}
