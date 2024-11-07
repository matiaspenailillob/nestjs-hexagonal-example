import { Module } from '@nestjs/common';
import { USER_REPOSITORY } from './domain/ports/user.port';
import { UserPrismaRepository } from './infrastructure/repositories/user.prisma.repository';
import { UserController } from './infrastructure/controllers/user.controller';
import { UserService } from './application/services/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './domain/entities/user.mongodb.schema';
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
    ],
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ]
})
export class UsersModule {}
