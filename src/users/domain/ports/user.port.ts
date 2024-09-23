import { User } from "../entities/user.interface";

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface UserRepositoryPort {
    createUser(user: User): Promise<User>;
    findAll(): Promise<User[]>;
}