import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createUserDto: CreateUserDto) {
        const { email,login, name, password}  = createUserDto;
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds); 
        
        const existingUser = await this.prisma.user.findUnique({
            where: {
                login: createUserDto.login
            }
        });
        if (existingUser) {
            throw new ConflictException("Usuario já existe")
        }

        return await this.prisma.user.create({
            data: {
                email: email,
                login: login,
                name: name,
                password: hash
            },
        });
    }

    async findAll() {
        const users = await this.prisma.user.findMany();
        return users.map(({ password, ...rest }) => rest);
    }

    async findOne(id: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                userId: id
            }
        });
        if (!user) {
            throw new NotFoundException("Usuario não encontrado")
        }
        return user;
    }

    async update(id: number, updateUser: UpdateUserDto) {

        const user = await this.prisma.user.findUnique({
            where: {
                userId: id
            }
        });
        if (!user) {
            throw new NotFoundException("Usuario não encontrado")
        };

        return await this.prisma.user.update({
            where: {
                userId: id
            },
            data: updateUser
        });
    }

    async remove(id: number) {
        const user = await this.prisma.user.findUnique(
            {
                where: {
                    userId: id
                }
            });
        if (!user) {
            throw new NotFoundException("Usuario não encontrado")
        };
        await this.prisma.user.delete({
            where: {
                userId: id
            }
        });

        return null
    }
}
