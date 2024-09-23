import { User } from 'src/users/domain/entities/user.interface';
import { UserRepositoryPort } from '../../domain/ports/user.port';
import { Injectable } from '@nestjs/common';


@Injectable()
export class UserPrismaRepository implements UserRepositoryPort {
    createUser(user: User): Promise<User> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }

}