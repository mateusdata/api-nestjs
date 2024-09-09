import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserInput {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @MinLength(10)
    password: string
}