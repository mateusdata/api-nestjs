import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModeloModule } from './modelo/modelo.module';
import { TodoListModule } from './todolist/todolist.module';

@Module({
  imports: [ModeloModule, TodoListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
