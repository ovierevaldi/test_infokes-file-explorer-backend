import { InjectModel } from "@nestjs/mongoose";
import { File } from "./schemas/file.schema";
import { Model } from "mongoose";
import { OnModuleInit } from "@nestjs/common";
import { count, log } from "console";

export class DefaultDataService implements OnModuleInit{
    constructor(@InjectModel(File.name) private fileModel: Model<File>){}

    async onModuleInit() {
        await this.insertDefaultData()
    }

    private async insertDefaultData(){
        const count = await this.fileModel.countDocuments();

        // Create root default data
        if(count === 0){
            const rootFileData = new this.fileModel({
                name: 'root',
                children: [],
                root: -1
            })
            await rootFileData.save()
            console.log('New DB created. Create root file data');
        }
    }
}