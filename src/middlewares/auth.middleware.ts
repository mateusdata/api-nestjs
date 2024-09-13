import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    // Obtém o cabeçalho de autorização
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('No authorization header provided');
    }

    // Extrai o token do cabeçalho de autorização
    const [_, token] = authHeader.split(' ');

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      // Verifica e decodifica o token
      const payload = this.jwtService.verify(token);
      if(payload){
        console.log("Soccess");
        
        next();
      }
      
    } catch (error) {
      // Se o token não for válido, lança uma exceção
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
