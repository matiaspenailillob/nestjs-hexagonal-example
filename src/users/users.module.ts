import { Module } from '@nestjs/common';
import { USER_REPOSITORY } from './domain/ports/user.port';
import { UserPrismaRepository } from './infrastructure/repositories/user.prisma.repository';
import { UserController } from './infrastructure/controllers/user.controller';
import { UserService } from './application/services/user.service';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
    controllers: [UserController],
    providers: [
        PrismaService,
        UserService,
        {
            provide: USER_REPOSITORY,
            useClass: UserPrismaRepository
        }
    ]
})
export class UsersModule {}
