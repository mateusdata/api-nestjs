import { PrismaService } from './../prisma.service';
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
    return `This action returns a #${id} comment`;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  async remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
