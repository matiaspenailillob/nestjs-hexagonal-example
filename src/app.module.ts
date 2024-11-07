import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [NotesModule, UsersModule, MongooseModule.forRoot(process.env.MONGO_URL)],
  controllers: [AppController],
  providers: [PrismaService, AppService],
  exports: [PrismaService]
})
export class AppModule {}
