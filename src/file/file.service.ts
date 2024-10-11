import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './schemas/file.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FileService {
    constructor(@InjectModel(File.name) private fileModel: Model<File>){}

    folderData: CreateFileDto[] = [
        {
            "treeId": 0,
            "name": "root",
            "childrens": [],
            "root": -1
         }
    ];

    async findAll(){
        return this.fileModel.find().exec();
    }

    findOne(id: number){
        return this.folderData.find((element) => element.treeId === id)
    }

    async createFile(createFileDto: CreateFileDto): Promise<File>{
        const createdFile = new this.fileModel(createFileDto)
        return createdFile.save()
    }

    async updateFile(treeID: number, updateFileDto: UpdateFileDto): Promise<File>{
        const updatedFile = await this.fileModel.findOneAndUpdate( { treeID } , {$push: {childrens: updateFileDto.children}}, {
            new: true,
            runValidators: true
        })

        if (!updatedFile){
               throw new NotFoundException(`File with treeID ${treeID} not found`);
        }

        return updatedFile;
    }

    deleteFile(id: number){
        const deleteIndex = this.folderData.findIndex(value => value.treeId === id);
        if(deleteIndex === -1)
            return 'File Not Found'
        
        this.folderData.splice(deleteIndex, 1);
        return this.folderData
    }
   
}
