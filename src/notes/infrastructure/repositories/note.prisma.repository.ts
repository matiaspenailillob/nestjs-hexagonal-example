import { Injectable } from "@nestjs/common";
import { Note } from "src/notes/domain/note.interface";
import { NoteRepositoryPort } from "src/notes/domain/ports/note.port";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class NotePrismaRepository implements NoteRepositoryPort {

    constructor(private prismaService: PrismaService) {

    }

    findNoteById(noteId: number): Promise<Note | null> {
        const note = this.prismaService.note.findUnique({
            where: { id: +noteId },
            include: { tags: true },
        })

        if(!note) return null;

        return note;
    }

    updateNote(note: any): Promise<Note> {
        throw new Error("Method not implemented.");
    }

    async createNote(note: Note): Promise<Note> {
        const { tags, userId, content, title } = note;
        const noteCreated = await this.prismaService.note.create({
            data: {
                userId,
                content,
                title,
                tags: {
                    connect: tags?.map(tagId => ({ id: tagId.id })), //connect es útil cuando las entidades relacionadas (como etiquetas o usuarios) ya existen en la base de datos y solo deseas relacionarlas con la nueva entidad (nota en este caso).
                },
            },
            include: {
                tags: true // Esto le dice a Prisma que cuando crea la nota, también queremos obtener las etiquetas asociadas a esa nota en el resultado. Sin include, Prisma solo te devolvería los campos de la nota (ID, título, contenido, etc.), pero no incluiría las etiquetas relacionadas 
            }
        })

        return noteCreated;
    }

    async findAllNotesByUser(userId): Promise<Note[]> {
        const notes = await this.prismaService.note.findMany({
            where: { userId },
            include: { tags: true }
        })

        return notes;
    }

}