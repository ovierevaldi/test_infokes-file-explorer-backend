import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { FolderService } from './folder.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Controller('folder')
export class FolderController {
    constructor(private folderService: FolderService){}

    @Get()
    async getAllFile(){
        return this.folderService.getAllFile();
    }

    @Post()
    async createFile(@Body() createFolderDto: CreateFileDto){
        return this.folderService.createFile(createFolderDto);
    }

    @Patch(':id')
    async updateFile(@Param('id') id: number, @Body() updateFileDto: UpdateFileDto){
        return this.folderService.updateFile(+id, updateFileDto);
    }

    @Delete(':id')
    async deleteFile(@Param('id') id: number){
        return this.folderService.deleteFile(+id)
    }

}
