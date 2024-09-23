import { Note } from "../note.interface";

/* 
Token (USER_REPOSITORY): Usamos una constante como identificador del puerto. Esta constante actúa como el enlace entre la interfaz (puerto) y la implementación concreta (adaptador). 
*/
export const NOTE_REPOSITORY = 'NOTE_REPOSITORY'

export interface NoteRepositoryPort {
    createNote(note: Note): Promise<Note>;
    findNoteById(noteId: number): Promise<Note | null>;
    updateNote(note): Promise<Note>;
    findAllNotesByUser(userId: number): Promise<Note[]>
}