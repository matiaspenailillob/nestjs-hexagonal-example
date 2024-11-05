import { Module } from '@nestjs/common';
import { HashService } from './infrastructure/services/hash.service';

@Module({
    providers: [
        HashService
    ],
    exports: [ 
        HashService
    ]
})
export class AuthModule {}
