import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createUser: CreateUserDto) {

        const existingUser = await this.prisma.user.findUnique({
            where: {
                login: createUser.login
            }
        });
        if (existingUser) {
            throw new ConflictException("Usuario já existe")
        }

        return await this.prisma.user.create({
            data: createUser,
        });
    }

    async findAll() {
        return this.prisma.user.findMany();
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
        const user = await this.prisma.user.findUnique({
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
