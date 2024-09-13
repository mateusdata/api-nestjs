import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";

@Module({
    imports:[
        JwtModule.register({
            secret:"123",
            signOptions:{
                expiresIn:"20s"
            }
        })
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        PrismaService,
    ]
})
export class AuthModule  { }