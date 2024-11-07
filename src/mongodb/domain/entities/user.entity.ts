import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: "users"})
export class UserEntity extends Document {

    @Prop({ required:  true, unique: true })
    username: string;

    @Prop({ required:  true, unique: true })
    email: string;

    @Prop({ required:  true })
    passwordHash: string;

    @Prop({ default: new Date(), required: false})
    createAt?: Date;


    @Prop({ default: new Date(), required: false })
    updateAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity)