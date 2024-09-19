import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthMiddleware } from "src/middlewares/auth.middleware";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "123",
      signOptions: { expiresIn: '15d' },
    }),

  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,

  ],
  exports: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: '/login', method: RequestMethod.ALL },
        { path: '/', method: RequestMethod.ALL },
        { path: '/users', method: RequestMethod.POST },
        { path: '/docs', method: RequestMethod.ALL },
      )
      .forRoutes('*');
  }
}