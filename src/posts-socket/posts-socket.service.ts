import { PostsService } from 'src/posts/posts.service';
import { Injectable } from '@nestjs/common';
import { CreatePostsSocketDto } from './dto/create-posts-socket.dto';
import { UpdatePostsSocketDto } from './dto/update-posts-socket.dto';

@Injectable()
export class PostsSocketService {
  constructor(private readonly postService: PostsService) { }

  create(createPostsSocketDto: CreatePostsSocketDto) {
    return 'This action adds a new postsSocket';
  }

  async findAll() {
    const posts = await this.postService.findAll()
    return posts;
  }

  findOne(id: number) {
    return `This action returns a #${id} postsSocket`;
  }

  update(id: number, updatePostsSocketDto: UpdatePostsSocketDto) {
    return `This action updates a #${id} postsSocket`;
  }

  remove(id: number) {
    return `This action removes a #${id} postsSocket`;
  }
}
