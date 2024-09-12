import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { TodoListModule } from './todolist/todolist.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LoggingInterceptor } from './logging.interceptor';

@Module({
  imports: [
    TodoListModule,
    UsersModule,
    LoginModule,
    PessoasModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
