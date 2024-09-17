import { Module } from '@nestjs/common';
import { PostsSocketService } from './posts-socket.service';
import { PostsSocketGateway } from './posts-socket.gateway';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [PostsModule],
  providers: [PostsSocketGateway, PostsSocketService],
  exports: [PostsSocketGateway, PostsSocketService]
})
export class PostsSocketModule { }
