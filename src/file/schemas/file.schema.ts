import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type FileDocument = HydratedDocument<File>

@Schema()
export class File{
    @Prop({required: true})
    treeID: number

    @Prop({required: true, unique: true})
    name: string

    @Prop({required: true})
    type: string

    @Prop({required: true})
    root: number
    
    @Prop({ type: [Number]})
    childrens: number[]
}


export const FileSchema = SchemaFactory.createForClass(File)