import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserEntity } from "src/mongodb/domain/entities/user.entity";
import { User } from "src/users/domain/entities/user.interface";
import { UserRepositoryPort } from "src/users/domain/ports/user.port";

@Injectable()
export class UserMongoDbRepository implements UserRepositoryPort {


    constructor(@InjectModel(UserEntity.name) private userModel: Model<UserEntity>) {

    }

    async createUser(user: User): Promise<User> {
        const userToSave = new this.userModel(user);
        
        const userCreated = await userToSave.save();
        console.log('User Created', userCreated)
        return userCreated;
    }
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

}