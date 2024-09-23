import { Module } from '@nestjs/common';
import { NoteController } from './infrastructure/controllers/note.controller';
import { NoteService } from './application/services/note.service';
import { NotePrismaRepository } from './infrastructure/repositories/note.prisma.repository';
import { NOTE_REPOSITORY } from './domain/ports/note.port';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [NoteController],
  providers: [
    PrismaService,
    NoteService,
    NotePrismaRepository,
    /* 
      Proveedores: En el módulo (NoteModule), indicamos que cuando NestJS vea el token NOTE_REPOSITORY,
      debe inyectar la clase PrismaUserRepository. Esto permite desacoplar la lógica del dominio de la implementación concreta de la persistencia.
    */
    {
      provide: NOTE_REPOSITORY,
      useClass: NotePrismaRepository
    }
  ]
})
export class NotesModule {}
