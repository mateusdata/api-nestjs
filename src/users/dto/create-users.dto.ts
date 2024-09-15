import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'O login é obrigatório.' })
    @IsString({ message: 'O login deve ser uma string.' })
    login: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'O nome é obrigatório.' })
    @IsString({ message: 'O nome deve ser uma string.' })
    name: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
    @IsEmail({}, { message: 'O e-mail deve ser um endereço de e-mail válido.' })
    email: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'A senha é obrigatória.' })
    @IsString({ message: 'A senha deve ser uma string.' })
    @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
    password: string;
}
