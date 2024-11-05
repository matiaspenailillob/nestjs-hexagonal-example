import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [NotesModule, UsersModule, TagsModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
  exports: [PrismaService]
})
export class AppModule {}
