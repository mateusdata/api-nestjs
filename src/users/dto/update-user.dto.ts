import { PartialType } from "@nestjs/mapped-types";
import { CreatePessoaDto } from "src/pessoas/dto/create-pessoa.dto";

export class UpdateUserDto extends PartialType(CreatePessoaDto) {

}