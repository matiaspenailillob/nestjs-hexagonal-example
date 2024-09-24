
/*
we recommend using classes here. Why? Classes are part of the JavaScript ES6 standard, and therefore they are preserved as real entities in the compiled JavaScript. On the other hand, since TypeScript interfaces are removed during the transpilation, Nest can't refer to them at runtime
*/

import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateNoteDto {
    
    @IsNotEmpty({ message: 'El título es obligatorio' })
    @IsString({ message: 'El título debe ser un string' })
    title: string;
    
    @IsNotEmpty({ message: 'El contenido es obligatorio' })
    @IsString({ message: 'El contenido debe ser un string' })
    content: string;

    @IsOptional()
    @IsArray({ message: 'Las etiquetas deben ser un array' })
    @IsNumber({}, { each: true, message: 'Cada etiqueta  debe ser un número' })
    tags?: number[];
    
    @IsNotEmpty()
    @IsNumber({}, { message: 'El id de usuario debe ser un numero'})
    userId: number;
}