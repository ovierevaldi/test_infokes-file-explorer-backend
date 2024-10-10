import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FolderService } from './folder/folder.service';
import { FolderController } from './folder/folder.controller';

@Module({
  imports: [],
  controllers: [AppController, FolderController],
  providers: [AppService, FolderService],
})
export class AppModule {}
