import { Body, Injectable, NotFoundException, Param, ParseIntPipe } from "@nestjs/common";
import { CreateUserInput } from "./dtos/createUserInput.dto";
import { UpdateUserInput } from "./dtos/updateUserInput.dto";

@Injectable()
export class UserService {
    
    private users = [
        { id: 1, name: "Mateus", email: "mateus@gmail.com", password: "12345678945" },
        { id: 2, name: "maria", email: "maria@gmail.com", password: "12345678945" },
        { id: 3, name: "lucas", email: "lucas@gmail.com", password: "12345678945" },
    ];

    findAll() {
        return this.users
    }

    findById(id: number) {
        console.log(typeof id);
        const user = this.users.find((user) => (user.id === id));
        if (!user) {
            throw new NotFoundException("Usuario não encontrado")
        }
        return user
    }

    create(user: CreateUserInput) {

        const lastId = this.users.length;
        const newUser = {
            id: lastId + 1,
            ...user
        }

        this.users.push(newUser);
        return this.users;
    }

    update( id: number, body: UpdateUserInput) {
        
        const user = this.users.find((user) => (user.id === id))
        if (!user) throw new NotFoundException("Usuario não encontrado");
        return user;
    }

    
}