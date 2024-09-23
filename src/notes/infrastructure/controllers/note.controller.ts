import { Body, Controller, Post } from '@nestjs/common';
import { NoteService } from 'src/notes/application/services/note.service';
import { CreateNoteDto } from '../dto/create-note.dto';
import { Note } from 'src/notes/domain/note.interface';

@Controller('notes')
export class NoteController {


    constructor( private readonly noteService: NoteService) {

    }

    @Post()
    async createNote(@Body() createNoteDto: CreateNoteDto) {
        const { title, content, userId, tags = [] } = createNoteDto;
        const note: Note = { title, content, userId, tags }

        console.log('Note: ', { dto: createNoteDto, parsed: note })

        return this.noteService.createNote(note)
    }

}
