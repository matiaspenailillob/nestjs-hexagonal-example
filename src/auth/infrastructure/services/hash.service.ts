import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {

    // cantidad de veces que se realizara el proceso de hashing. 
    // EL salt es importante para prevenior ataques de fuerza bruta, aumentando su numero, aumentas la seguridad haciendo el hash mas complejo 
    // aunque si el numero es mas grande sera mas lento su procesamiento.
    // En el caso que tengamos dos contraseñas iguales, gracias a salt no tendrán el mismo hash.
    private readonly saltRounds = 10;

    async hashPassword(password: string) {
        return bcrypt.hash(password, this.saltRounds)
    }

    async comparePassword(password: string, hash: string) {
        return bcrypt.compare(password, hash);
    }
}