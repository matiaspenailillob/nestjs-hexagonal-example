import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/users/domain/entities/user.interface";
import { USER_REPOSITORY, UserRepositoryPort } from "src/users/domain/ports/user.port";

@Injectable()
export class UserService {
    constructor(
        @Inject(USER_REPOSITORY) private readonly userRepositoryPort: UserRepositoryPort
    ) {

    }

    async createUser(user: User): Promise<User> {
        return this.userRepositoryPort.createUser(user);
    }


    async findAll(): Promise<User[]> {
        return this.userRepositoryPort.findAll();
    }


}