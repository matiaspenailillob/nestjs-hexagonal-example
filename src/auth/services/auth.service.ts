import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/users/application/services/user.service";
import { HashService } from '../infrastructure/services/hash.service';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly hashService: HashService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {

        const user = await this.userService.findByUsername(username);
        const isValidPassword = await this.hashService.comparePassword(password, user.passwordHash);

        if(user && isValidPassword) {
            const { passwordHash, ...result } = user;
            return result;
        }

        throw new UnauthorizedException('Invalid credentials')
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

}