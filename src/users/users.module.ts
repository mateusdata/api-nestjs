import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { PostsModule } from 'src/posts/posts.module';
import { PostsSocketModule } from 'src/posts-socket/posts-socket.module';
import { PostsSocketGateway } from 'src/posts-socket/posts-socket.gateway';
import { PostsSocketService } from 'src/posts-socket/posts-socket.service';

@Module({
  imports: [PostsModule, PostsSocketModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, PostsSocketGateway, PostsSocketService, PostsModule],
})
export class UsersModule { }
