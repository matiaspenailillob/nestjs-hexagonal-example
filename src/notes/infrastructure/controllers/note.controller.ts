import { Body, Controller, Get, InternalServerErrorException, Param, Post, Put } from '@nestjs/common';
import { NoteService } from 'src/notes/application/services/note.service';
import { CreateNoteDto } from '../dto/create-note.dto';
import { Note } from 'src/notes/domain/note.interface';
import { UpdateNoteDto } from '../dto/update-note.dto';

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

    @Get(':id')
    async findNoteById(@Param('id') noteId: number) {
        return this.noteService.findNoteById(noteId);
    }

    @Get('user/:userId')
    async getAllNotesByUser(@Param('id') userId: number) {
        return this.noteService.getAllNotesByUser(userId);
    }

    @Put(':id')
    async updateNote(@Param('id') noteId: number, @Body() updateNoteDto: UpdateNoteDto) {
        try {
            const { title, content, tags = [] } = updateNoteDto;
            const note: Note = { title, content, tags, id: +noteId }

            console.log('Note to update', JSON.stringify(note, null, 2));

            return this.noteService.updateNote(note);

        } catch (error) {
            console.log('Error:', error.message)
            throw new InternalServerErrorException('Error to update the note')
        }
    }

}
