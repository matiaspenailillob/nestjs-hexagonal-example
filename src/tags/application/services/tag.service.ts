import { Inject, Injectable } from "@nestjs/common";
import { Tag } from "src/tags/domain/entities/tags.interface";
import { TAG_REPOSITORY } from "src/tags/domain/ports/tags.port";
import { TagPrismaRepository } from "src/tags/infrastructure/repositories/tag.prisma.repository";

@Injectable()
export class TagService {

    constructor(
        @Inject(TAG_REPOSITORY) private readonly tagRepository: TagPrismaRepository
    ) {

    }

    async createTag(name: string): Promise<Tag> {
        const tag: Tag = { name }
        return this.tagRepository.createTag(tag);
      }
    
      async getAllTags(): Promise<Tag[]> {
        return this.tagRepository.findAllTags();
      }
    
      async getTagById(id: number): Promise<Tag> {
        return this.tagRepository.findTagById(id);
      }
    
      async updateTag(id: number, name: string): Promise<Tag> {
        return this.tagRepository.updateTag(id, name);
      }


}