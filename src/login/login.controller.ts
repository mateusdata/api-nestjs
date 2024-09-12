import { Body, Controller, Post } from "@nestjs/common";
import { LoginService } from "./login.service";
import { LoginDto } from "./dto/login.dto";

@Controller("/login")
export class LoginController {
    constructor(private readonly loginService: LoginService) { }
        
    @Post()
    login(@Body() credentials: LoginDto){
       return this.loginService.login(credentials)
    }
}