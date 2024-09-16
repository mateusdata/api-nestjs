import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentLikeDto } from './dto/create-comment-like.dto';
import { UpdateCommentLikeDto } from './dto/update-comment-like.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentLikeService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createCommentLikeDto: CreateCommentLikeDto) {

    const existingPostLike = await this.prisma.commentLike.findUnique({
      where: {
        commentId_userId: {
          commentId: createCommentLikeDto.commentId,
          userId: createCommentLikeDto.userId
        }
      }
    });

    if (existingPostLike) {
      throw new ConflictException("Não é possivel curtir novamente");
    }

    const postLike = await this.prisma.commentLike.create({
      data: createCommentLikeDto,
    })

    return postLike;
  }

  findAll() {
    return `This action returns all commentLike`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentLike`;
  }

  update(id: number, updateCommentLikeDto: UpdateCommentLikeDto) {
    return `This action updates a #${id} commentLike`;
  }

  async remove(id: number) {
    const existingPostLike = await this.prisma.commentLike.findUnique({
      where: {
        commentLikeId: id
      }
    });

    if (!existingPostLike) {
      throw new NotFoundException("Comentario não encontrado");
    }

    await this.prisma.commentLike.delete({
      where: {
        commentLikeId: id
      }
    })

    return null
  }
}
