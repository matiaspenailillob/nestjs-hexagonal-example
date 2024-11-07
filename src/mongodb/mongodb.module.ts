import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, UserSchema } from './domain/entities/user.entity';

@Global()
@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_URL),
        MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }])
    ],
    exports: [MongooseModule]
})
export class MongodbModule {}
