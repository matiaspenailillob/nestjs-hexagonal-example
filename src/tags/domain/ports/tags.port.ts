import { Tag } from "../entities/tags.interface";


export const TAG_REPOSITORY = 'TAG_REPOSITORY';

export interface TagPort {
    createTag(tag: Tag): Promise<Tag>
    updateTag(id: number, name: string): Promise<Tag>
    findAllTags(): Promise<Tag[]>
    findTagById(id: number): Promise<Tag | null>
}