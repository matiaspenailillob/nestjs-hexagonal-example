import { Module } from '@nestjs/common';
import { USER_REPOSITORY } from './domain/ports/user.port';
import { UserPrismaRepository } from './infrastructure/repositories/user.prisma.repository';
import { UserController } from './infrastructure/controllers/user.controller';
import { UserService } from './application/services/user.service';


@Module({
    controllers: [UserController],
    providers: [
        UserService,
        {
            provide: USER_REPOSITORY,
            useClass: UserPrismaRepository
        }
    ]
})
export class UsersModule {}
