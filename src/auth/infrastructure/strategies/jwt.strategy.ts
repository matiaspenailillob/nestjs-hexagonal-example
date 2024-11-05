import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt'

/*
PassportStrategy(Strategy) usa la estrategia passport-jwt para la autenticación.

Esta estrategia:
Extrae el token JWT de la cabecera de autorización (Authorization: Bearer <token>).
Verifica la validez del token usando una clave secreta o una clave pública (dependiendo de la configuración).
Si el token es válido, decodifica el payload y lo pasa al método validate.
Retorna el usuario autenticado al contexto de la solicitud.
*/

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrae el token del header
            ignoreExpiration: false, // No ignorar la expiración del token
            secretOrKey: configService.get<string>('JWT_SECRET') // Clave secreta para validar el token
        })
    }

    async validate (payload: any) {
        // El método validate se llama automaticamente si el token es válido.
        // Aquí puedes retornar datos adicionales del usuario si lo necesitas.
        return { userId: payload.sub, username: payload.username }
    }

}