import { PrismaService } from '../prisma/prisma.service';
import { Injectable, NotFoundException, Delete, ConflictException } from '@nestjs/common';
import { CreatePostLikeDto } from './dto/create-post-like.dto';
import { UpdatePostLikeDto } from './dto/update-post-like.dto';

@Injectable()
export class PostLikeService {

  constructor(private readonly prisma: PrismaService) { }
  async create(createPostLikeDto: CreatePostLikeDto) {

    const existingPostLike = await this.prisma.postLike.findUnique({
      where: {
        postId_userId: {
          postId: createPostLikeDto.postId,
          userId: createPostLikeDto.userId
        }
      }
    });

    if (existingPostLike) {
      throw new ConflictException("Não é possivel curtir novamente");
    }

    const postLike = await this.prisma.postLike.create({
      data: createPostLikeDto,
    })

    return postLike;
  }

  async findAll() {
    return `This action returns all postLike`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} postLike`;
  }

  async update(id: number, updatePostLikeDto: UpdatePostLikeDto) {
    return `This action updates a #${id} postLike`;
  }

  async remove(id: number) {
    const existingPostLike = await this.prisma.postLike.findUnique({
      where: {
        postLikeId: id
      }
    });

    if (!existingPostLike) {
      throw new NotFoundException("Post não encontrado");
    }

    await this.prisma.postLike.delete({
      where: {
        postLikeId: id
      }
    })

    return null
  }

}
