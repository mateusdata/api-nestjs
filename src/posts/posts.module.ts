import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[UsersModule],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [ PostsService]
})
export class PostsModule { }
