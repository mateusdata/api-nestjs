// src/middlewares/auth.middleware.ts
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('No authorization header provided');
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException('Malformed authorization header');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);
      if (payload) {
        req['user'] = payload;

        console.log('Token verificado com sucesso:', payload);
        next();
      }
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
