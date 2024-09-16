import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentLikeDto {
    @ApiProperty()
    @IsInt({ message: "commentId tem que ser um numero" })
    @IsNotEmpty({ message: "commentId  é obrigatorio" })
    commentId: number;
    @IsInt({ message: "userId tem que ser um numero" })
    @IsNotEmpty({ message: "userId  é obrigatorio" })
    userId: number;
}
