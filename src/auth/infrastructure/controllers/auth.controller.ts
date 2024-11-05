import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../../services/auth.service";
import { UserService } from "src/users/application/services/user.service";
import { HashService } from '../services/hash.service';
import { User } from "src/users/domain/entities/user.interface";
import { LoginUserDto, RegisterUserDto } from "../dto/auth.dto";

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
        private readonly hashService: HashService,
    ) {}

    @Post('register')
    async register(@Body() body: RegisterUserDto) {
        const hashedPassword = await this.hashService.hashPassword(body.password);
        const user: User = {
            username: body.username,
            passwordHash: hashedPassword,
            email: body.email
        }

        return this.userService.createUser(user)
    }

    @Post('login')
    async login(@Body() body: LoginUserDto) {
        const validUser = await this.authService.validateUser(body.username, body.password);
        return this.authService.login(validUser);
    }
}