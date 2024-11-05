import { Module } from '@nestjs/common';
import { HashService } from './infrastructure/services/hash.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './infrastructure/strategies/jwt.strategy';
import { AuthService } from './services/auth.service';

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService], // permite acceder a las variables de entorno.
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: configService.get<string>('JWT_EXPIRATION')}
            })
        })
    ],
    providers: [
        HashService,
        JwtStrategy,
        AuthService
    ],
    exports: [ 
        AuthService
    ]
})
export class AuthModule {}
