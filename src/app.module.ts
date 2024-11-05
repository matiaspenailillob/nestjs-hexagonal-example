import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true // Hace que ConfigModule este disponible en toda la aplicación.
    }),
    NotesModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [PrismaService, AppService],
  exports: [PrismaService]
})
export class AppModule {}
