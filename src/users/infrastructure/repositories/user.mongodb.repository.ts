import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/users/domain/entities/user.interface";
import { User as UserModel } from "src/users/domain/entities/user.mongodb.schema";
import { UserRepositoryPort } from "src/users/domain/ports/user.port";

@Injectable()
export class UserMongoDbRepository implements UserRepositoryPort {


    constructor(@InjectModel(UserModel.name) private userModel: Model<UserModel>) {

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