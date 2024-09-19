import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { PostsSocketService } from './posts-socket.service';
import { CreatePostsSocketDto } from './dto/create-posts-socket.dto';
import { UpdatePostsSocketDto } from './dto/update-posts-socket.dto';
import { Server } from 'ws';

@WebSocketGateway({ path: "/posts" })
export class PostsSocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly postsSocketService: PostsSocketService) { }
  @WebSocketServer() server: Server
  async handleConnection(client: WebSocket, ...args: any[]) {

    const getPosts = async () => {
      const posts = await this.postsSocketService.findAll();
      client.send(JSON.stringify(posts))
    }
    const interval = setInterval(getPosts, 3000);
    client.onclose = () => {
      console.log("Cliente desconectado");
      clearInterval(interval)
    }
  }


  handleDisconnect(client: any) {

  }
  @SubscribeMessage('createPostsSocket')
  create(@MessageBody() createPostsSocketDto: CreatePostsSocketDto) {
    return this.postsSocketService.create(createPostsSocketDto);
  }

  @SubscribeMessage('findAllPostsSocket')
  findAll() {
    return this.postsSocketService.findAll();
  }

  @SubscribeMessage('findOnePostsSocket')
  findOne(@MessageBody() id: number) {
    return this.postsSocketService.findOne(id);
  }

  @SubscribeMessage('updatePostsSocket')
  update(@MessageBody() updatePostsSocketDto: UpdatePostsSocketDto) {
    return this.postsSocketService.update(updatePostsSocketDto.id, updatePostsSocketDto);
  }

  @SubscribeMessage('removePostsSocket')
  remove(@MessageBody() id: number) {
    return this.postsSocketService.remove(id);
  }
}
