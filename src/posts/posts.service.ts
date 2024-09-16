import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService
  ) { }

  async create(createPostDto: CreatePostDto) {
    const userExists = await this.usersService.userExists(createPostDto.userId);
    if (!userExists) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const post = await this.prisma.post.create({
      data: {
        userId: createPostDto.userId,
        message: createPostDto.message
      }
    });

    return post;
  }

  async findAll() {
    return await this.prisma.post.findMany({
      orderBy: {
        updatedAt: "desc"
      },
      include: {
        user: {
          select: {
            name: true,
          }
        },
        comments: {
          select: {
            commentId: true,
            message: true,
            likes: true,
            user: {
              select: {
                name: true
              }
            },
            _count: {
              select: {
                likes: true
              }
            }
          },
          orderBy: {
            updatedAt: "desc"
          }
        },

        likes: true,
        _count: {
          select: {
            likes: true,
            comments: true
          }
        }
      }
    });
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: { postId: id }
    });

    if (!post) {
      throw new NotFoundException('Post não encontrado');
    }

    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const existingPost = await this.prisma.post.findUnique({
      where: {
        postId: id,
        AND: {
          userId: updatePostDto.userId
        }
      }
    });
    if (!existingPost) {
      throw new NotFoundException('Post não encontrado');
    }

    const userExists = await this.usersService.userExists(updatePostDto.userId);
    if (!userExists) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const updatedPost = await this.prisma.post.update({
      data: updatePostDto,
      where: { postId: id }
    });

    return updatedPost;
  }

  async remove(id: number) {
    const existingPost = await this.prisma.post.findUnique({
      where: { postId: id }
    });
    if (!existingPost) {
      throw new NotFoundException('Post não encontrado');
    }

    await this.prisma.post.delete({
      where: { postId: id }
    });

    return null;
  }
}
