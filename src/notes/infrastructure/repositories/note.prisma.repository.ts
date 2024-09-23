import { Injectable } from "@nestjs/common";
import { Note } from "src/notes/domain/note.interface";
import { NoteRepositoryPort } from "src/notes/domain/ports/note.port";


@Injectable()
export class NotePrismaRepository implements NoteRepositoryPort {
    createNote(note: Note): Promise<Note> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Note[]> {
        throw new Error("Method not implemented.");
    }

}