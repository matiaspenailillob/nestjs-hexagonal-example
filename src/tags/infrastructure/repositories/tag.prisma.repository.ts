import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { Tag } from "src/tags/domain/entities/tags.interface";
import { TagPort } from "src/tags/domain/ports/tags.port";


@Injectable()
export class TagPrismaRepository implements TagPort {


    constructor( private readonly prisma: PrismaService){

    }

    async createTag(tag: Tag): Promise<Tag> {
        try {
            const tagCreated = await this.prisma.tag.create({
                data: { name: tag.name}
            });

            return tagCreated;

        } catch (error) {
            console.log('Error', error);
            

            if(error.code === 'P2002') {
                throw new ConflictException('this name already exists')
            }
            
            throw new InternalServerErrorException('Error to create this tag')
        }
    }

    async updateTag(id: number, name: string): Promise<Tag> {
        
        const tag = await this.prisma.tag.update({
            where: { id },
            data: { name }
        })

        console.log('Update tag', tag)

        return tag;
    }


    async findAllTags(): Promise<Tag[]> {
        return this.prisma.tag.findMany();
    }


    async findTagById(id: number): Promise<Tag | null> {
        const tag = await this.prisma.tag.findUnique({
            where: { id: +id }
        });

        if(!tag) throw new NotFoundException('Tag not found')

        return tag;
    }

}