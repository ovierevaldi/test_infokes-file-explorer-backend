import { CreateFileDto } from "./create-file.dto";

export class UpdateFileDto extends CreateFileDto{
    name: string;
    childrens: [];
}