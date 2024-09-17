import { PartialType } from '@nestjs/mapped-types';
import { CreatePostsSocketDto } from './create-posts-socket.dto';

export class UpdatePostsSocketDto extends PartialType(CreatePostsSocketDto) {
  id: number;
}
