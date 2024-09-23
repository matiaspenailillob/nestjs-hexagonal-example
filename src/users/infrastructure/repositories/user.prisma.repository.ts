import { User } from 'src/users/domain/entities/user.interface';
import { UserRepositoryPort } from '../../domain/ports/user.port';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserPrismaRepository implements UserRepositoryPort {


    constructor(private prisma: PrismaService) {

    }

    async createUser(user: User): Promise<User> {
        const userCreated = await this.prisma.user.create({
            data: user
        });

        return userCreated;
    }

    async findAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users;
    }

}