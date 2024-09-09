import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { CreateUserInput } from "./createUserInput.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateUserInput extends PartialType(CreateUserInput)  {
    
}