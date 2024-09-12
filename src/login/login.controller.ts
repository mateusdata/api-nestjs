import { Body, Controller, Post } from "@nestjs/common";
import { LoginService } from "./login.service";
import { LoginDto } from "./dto/login.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("/login")
@ApiTags("Sistema de login")
export class LoginController {
    constructor(private readonly loginService: LoginService) { }
        
    @Post()
    login(@Body() credentials: LoginDto){
       return this.loginService.login(credentials)
    }
}