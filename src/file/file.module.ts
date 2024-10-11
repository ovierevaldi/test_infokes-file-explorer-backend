import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { File, FileSchema } from './schemas/file.schema';
import { DefaultDataService } from './default-data.service';

@Module({
    imports: [MongooseModule.forFeature([{name: File.name, schema: FileSchema}])],
    controllers: [FileController],
    providers: [FileService, DefaultDataService]
})
export class FileModule {
    
}
