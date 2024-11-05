import { User } from 'src/users/domain/entities/user.interface';
import { UserRepositoryPort } from '../../domain/ports/user.port';
import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserPrismaRepository implements UserRepositoryPort {


    constructor(private prisma: PrismaService) {

    }

    async createUser(user: User): Promise<User> {
        try {
            const userCreated = await this.prisma.user.create({
                data: user
            });
    
            return userCreated;

        } catch (error) {
            console.log('Error to create', error)
            if(error.code === 'P2002'){
                throw new BadRequestException('User already exist')
            }
            
            throw new InternalServerErrorException('Error to create user')
        }
    }

    async findAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users;
    }

    async findByUsername(username: string): Promise<User | null> {
        const userFounded = await this.prisma.user.findFirst({
            where: { username }
        })

        console.log('user founded', userFounded);
        return userFounded;
    }

}