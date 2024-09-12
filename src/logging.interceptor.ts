import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { Observable, tap, catchError } from 'rxjs';
  import * as chalk from 'chalk';
  
  @Injectable()
  export class LoggingInterceptor implements NestInterceptor {
    intercept(
      context: ExecutionContext,
      next: CallHandler<any>,
    ): Observable<any> {
      const start = Date.now();
      const request = context.switchToHttp().getRequest();
      const method = request.method;
      const url = request.url;
  
      return next.handle().pipe(
        tap(() => {
          const end = Date.now();
          const elapsed = end - start;
          console.log(
            chalk.green(`Method: ${method}, URL: ${url}, Time: ${elapsed}ms`),
          );
        }),
        catchError((err) => {   
          const end = Date.now();
          const elapsed = end - start;
          console.error(
            chalk.red(`Method: ${method}, URL: ${url}, Time: ${elapsed}ms`),
            err,
          );
          throw err; 
        }),
      );
    }
  }
  