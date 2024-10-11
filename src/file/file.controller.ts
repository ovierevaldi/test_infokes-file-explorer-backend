import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Controller('file')
export class FileController {
    constructor(private fileService: FileService){}

    @Get()
    async getAllFile(){
        return this.fileService.getAllFile();
    }

    @Post()
    async createFile(@Body() createDto: CreateFileDto){
        return this.fileService.createFile(createDto);
    }

    @Patch(':id')
    async updateFile(@Param('id') id: number, @Body() updateFileDto: UpdateFileDto){
        return this.fileService.updateFile(+id, updateFileDto);
    }

    @Delete(':id')
    async deleteFile(@Param('id') id: number){
        return this.fileService.deleteFile(+id)
    }

}
