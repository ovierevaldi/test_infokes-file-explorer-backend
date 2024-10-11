import { Test, TestingModule } from '@nestjs/testing';
import { FolderController } from './file.controller';

describe('FolderController', () => {
  let controller: FolderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FolderController],
    }).compile();

    controller = module.get<FolderController>(FolderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
