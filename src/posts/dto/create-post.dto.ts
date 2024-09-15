import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {

    @ApiProperty()
    @IsInt({ message: 'O ID do usuário deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'O ID do usuário é obrigatório.' })
    userId: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'A mensagem é obrigatória.' })
    @IsString({ message: 'A mensagem deve ser uma string.' })
    message: string;
}
