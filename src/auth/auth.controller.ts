import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiBasicAuth, ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";

@Controller("/login")
@ApiTags("Sistema de login")
export class AuthController {
    constructor(private readonly authService: AuthService) { }
        
    @Post()
    @HttpCode(200)
    login(@Body() credentials: AuthDto){
       return this.authService.login(credentials)
    }
}