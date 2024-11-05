import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { TagService } from '../../application/services/tag.service';
import { CreateTagDto, UpdateTagDto } from "../dto/tag.dto";

@Controller('tags')
export class TagController {

    constructor( private readonly tagService: TagService ) {

    }

    @Post()
    async createTag(@Body() createTagDto: CreateTagDto) {
        return this.tagService.createTag(createTagDto.name);
    }

    @Put(':id')
    async updateTag(@Param('id') id: number, @Body() updateTagDto: UpdateTagDto ) {
        return this.tagService.updateTag(id, updateTagDto.name);
    }

    @Get()
    async getAllTags() {
      return this.tagService.getAllTags();
    }
  
    @Get(':id')
    async getTagById(@Param('id') id: number) {
      return this.tagService.getTagById(id);
    }

}