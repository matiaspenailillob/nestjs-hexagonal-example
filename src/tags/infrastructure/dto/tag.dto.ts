import { IsNotEmpty, IsString } from "class-validator";

export class CreateTagDto {
    
    @IsNotEmpty({ message: 'tag name is required '})
    @IsString({ message: ' tag name should be string '})
    name: string;
}

export class UpdateTagDto {
    
    @IsNotEmpty({ message: 'tag name is required '})
    @IsString({ message: ' tag name should be string '})
    name: string;
}