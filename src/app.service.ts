import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      data: 10,
      name: "Mateus",
      env: process.env.USER
    };
  }
}
