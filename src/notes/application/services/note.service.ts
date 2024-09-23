import { Inject, Injectable } from '@nestjs/common';
import { NOTE_REPOSITORY, NoteRepositoryPort } from 'src/notes/domain/ports/note.port';
import { Note } from '../../domain/note.interface';


@Injectable()
export class NoteService {
    constructor( 
       @Inject(NOTE_REPOSITORY) private readonly noteRepository: NoteRepositoryPort
    ) {

    }

    async createNote(note: Note): Promise<Note> {
        return this.noteRepository.createNote(note);
    }

    async getAllNotesByUser(userId: number): Promise<Note[]> {
        return this.noteRepository.findAllNotesByUser(userId);
    }

    async findNoteById(noteId: number): Promise<Note> {
        return this.noteRepository.findNoteById(noteId);
    }

    async updateNote(note: Note): Promise<Note> {
        return this.noteRepository.updateNote(note);
    }

}