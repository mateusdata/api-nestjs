import { PrismaService } from "src/prisma.service";
import { LoginDto } from "./dto/login.dto";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
    constructor(private readonly prisma: PrismaService) { }
    private readonly saltRounds = 10;

  /**
   * 
   * @param password 
   *   async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, this.saltRounds);
      }
   * @param hash 
   * @returns 
   */
    
      async comparePassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
      }

      
    async login(credentials: LoginDto) {
        const user = await this.prisma.user.findFirst({
            where: { email: credentials.email }
        });

        if (bcrypt.compare(credentials.password, user.password)) {
            throw new UnauthorizedException("Usuario ou senha incorretos");
        }
        const { password, ...result } = user;
     
        return user
    }
}