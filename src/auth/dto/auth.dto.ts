import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, MaxLength, minLength, MinLength } from "class-validator";

export class AuthDto {
    @ApiProperty()
    @IsEmail({}, { message: 'O email fornecido não é válido.' })
    @IsNotEmpty({ message: 'O email é obrigatório.' })
    email: string;
    
    @ApiProperty()
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
    @MaxLength(20, { message: 'A senha deve ter no máximo 20 caracteres.' })
    password: string;
}