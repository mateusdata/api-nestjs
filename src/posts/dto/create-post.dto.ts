import { IsInt, IsNotEmpty, IsString } from "class-validator"

export class CreatePostDto {
    @IsInt({ message: "User id tem que ser um número inteiro" })
    @IsNotEmpty({ message: "UserId é obrigatorio" })
    userId: number

    @IsNotEmpty({ message: "message é obrigatorio" })
    message: string
}
