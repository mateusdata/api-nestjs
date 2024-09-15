import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreatePostLikeDto {
    @ApiProperty()
    @IsInt({ message: "Postid tem que ser um numero" })
    @IsNotEmpty({ message: "Postid  é obrigatorio" })
    postId: number;
    @IsInt({ message: "userId tem que ser um numero" })
    @IsNotEmpty({ message: "userId  é obrigatorio" })
    userId: number;
}
