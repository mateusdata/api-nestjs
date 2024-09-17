import { PostsSocketGateway } from './../posts-socket/posts-socket.gateway';
import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';
import { PostsSocketService } from 'src/posts-socket/posts-socket.service';

@Injectable()
export class UsersService {
    constructor(
        private readonly prisma: PrismaService,
        // private readonly postsSocketGateway: PostsSocketService
    ) { }

    async create(createUserDto: CreateUserDto) {
        const { email, login, name, password } = createUserDto;
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds);

        const existingUser = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { login: createUserDto.login },
                    { email: createUserDto.email },
                ]
            }
        });
        if (existingUser) {
            throw new ConflictException("Usuario já existe")
        }
        const user = await this.prisma.user.create({
            data: {
                email: email,
                login: login,
                name: name,
                password: hash
            },
        });

        return user
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

    async userExists(id: number): Promise<boolean> {
        const user = await this.prisma.user.findUnique({
            where: {
                userId: id
            }
        });

        if (!user) {
            throw new NotFoundException("Usuario não encontrado")
        }
        return true;
    }
}
