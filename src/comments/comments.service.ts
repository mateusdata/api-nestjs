import { PrismaService } from '../prisma/prisma.service';
import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCommentDto: CreateCommentDto) {
    const postExisting = await this.prisma.post.findUnique({
      where: {
        postId: createCommentDto.postId,
      }
    });

    const userExists = await this.prisma.user.findUnique({
      where: {
        userId: createCommentDto.userId
      }
    });

    if (!postExisting || !userExists) {
      throw new NotFoundException("Post não encontrado");
    }
    const comment = await this.prisma.comment.create({
      data: createCommentDto,
    });

    return comment;
  }

  async findAll() {
    throw new NotImplementedException('Função findAll ainda não implementada.');
    return `This action returns all comments`;
  }

  async findOne(id: number) {
    throw new NotImplementedException('Função findOne ainda não implementada.');

    return `This action returns a #${id} comment`;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const commentExisting = await this.prisma.comment.findFirst({
      where: {
        commentId: id,
        userId: updateCommentDto.userId,
        postId: updateCommentDto.postId
      }
    })
    if (!commentExisting) {
      throw new NotFoundException("Comentario não encontrado para esse usuario")
    }

    const comment = this.prisma.comment.update({
      data: updateCommentDto,
      where: {
        commentId: id
      }
    })
    return comment;
  }

  async remove(id: number) {
    const existingComment = await this.prisma.comment.findUnique({
      where: {
        commentId: id
      }
    });

    if (!existingComment) {
      throw new NotFoundException("Commentario não encontrado")
    }
    const comment = await this.prisma.comment.delete({
      where: {
        commentId: id
      }
    })
    return null
  }
}
