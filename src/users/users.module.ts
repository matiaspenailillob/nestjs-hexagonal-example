import { Module } from '@nestjs/common';
import { USER_REPOSITORY } from './domain/ports/user.port';
// import { UserPrismaRepository } from './infrastructure/repositories/user.prisma.repository';
import { UserController } from './infrastructure/controllers/user.controller';
import { UserService } from './application/services/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserMongoDbRepository } from './infrastructure/repositories/user.mongodb.repository';


@Module({
    controllers: [UserController],
    providers: [
        PrismaService,
        UserService,
        {
            provide: USER_REPOSITORY,
            useClass: UserMongoDbRepository //UserPrismaRepository
        }
    ]
})
export class UsersModule {}
