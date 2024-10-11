import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/folderDB'), 
    FileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
