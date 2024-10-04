import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateNoteDto {

    @IsOptional({ message: 'El título es obligatorio' })
    @IsString({ message: 'El título debe ser un string' })
    title: string;

    @IsOptional({ message: 'El contenido es obligatorio' })
    @IsString({ message: 'El contenido debe ser un string' })
    content: string;


    @IsOptional()
    @IsArray({ message: 'Las etiquetas deben ser un array' })
    @IsNumber({}, { each: true, message: 'Cada etiqueta  debe ser un número' })
    tags?: number[];
}