import { PrismaService } from "src/prisma/prisma.service";
import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { AuthDto } from "./dto/auth.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly Jwt: JwtService
    ) { }



    async login(credentials: AuthDto) {
        const user = await this.prisma.user.findFirst({
            where: { email: credentials.email }
        });

        if (!user) {
            throw new NotFoundException("Usuario ou senha incorretas")
        }
        const isMatch = await bcrypt.compare(credentials.password, user.password);

        if (!isMatch) {
            throw new UnauthorizedException("Usuario ou senha incorretos");
        }
        const { password, ...result } = user;
        const payload = { email: credentials.email, user: user.userId }
        const token = this.Jwt.sign(payload)

        return { ...result, token }
    }
}