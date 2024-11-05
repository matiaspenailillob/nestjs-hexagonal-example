import { Module } from '@nestjs/common';
import { TAG_REPOSITORY } from './domain/ports/tags.port';
import { TagPrismaRepository } from './infrastructure/repositories/tag.prisma.repository';
import { TagService } from './application/services/tag.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TagController } from './infrastructure/controllers/tag.controller';

@Module({
    controllers: [
        TagController
    ],
    providers: [
        PrismaService,
        TagService,
        {
            provide: TAG_REPOSITORY,
            useClass: TagPrismaRepository
        }
    ]
})
export class TagsModule {}
