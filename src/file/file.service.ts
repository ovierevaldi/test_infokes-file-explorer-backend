import { Get, Injectable } from '@nestjs/common';
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
            "id": 0,
            "name": "root",
            "childrens": [],
            "root": -1
         }
    ];

    getAllFile(){
        return this.folderData;
    }

    findOne(id: number){
        return this.folderData.find((element) => element.id === id)
    }

    async createFile(createFileDto: CreateFileDto): Promise<File>{
        const createdFile = new this.fileModel(createFileDto)
        return createdFile.save()
    }

    updateFile(id: number, updateFileDto: UpdateFileDto){
        const file = this.folderData.find((element) => {
            return element.id === id; // Return the comparison result
        });

        if (!file){
            return 'File not found';
        }
        const updatedFile = {...this.folderData[id], ...updateFileDto};
        this.folderData[id] = updatedFile;

        return updatedFile;
    }

    deleteFile(id: number){
        const deleteIndex = this.folderData.findIndex(value => value.id === id);
        if(deleteIndex === -1)
            return 'File Not Found'
        
        this.folderData.splice(deleteIndex, 1);
        return this.folderData
    }
   
}
