import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "src/users/application/services/user.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "src/users/domain/entities/user.interface";

@Controller('users')
export class UserController {

    constructor( private readonly userService: UserService ) {

    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {

        const { username, password, email } = createUserDto;
        const user: User = { username, passwordHash: password, email };

        return this.userService.createUser(user);
    }


    @Get()
    async findAll() {
        return this.userService.findAll();
    }
}