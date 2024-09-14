// src/middlewares/auth.middleware.ts
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // Obtém o cabeçalho de autorização
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    
    if (!authHeader) {
      throw new UnauthorizedException('No authorization header provided');
    }

    // Verifica se o cabeçalho de autorização está no formato correto
    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException('Malformed authorization header');
    }

    try {
      // Verifica e decodifica o token
      const payload = await this.jwtService.verifyAsync(token);
      if (payload) {
        // Se necessário, você pode adicionar o payload ao request
        req['user'] = payload;

        console.log('Token verificado com sucesso:', payload);
        next();
      }
    } catch (error) {
      // Se o token não for válido, lança uma exceção
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
