import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FileDocument = HydratedDocument<File>

@Schema()
export class File{
   
    @Prop({required: true})
    name: string

    @Prop({required: true})
    root: number
    
    @Prop({ type: [Number]})
    children: number[]
}


export const FileSchema = SchemaFactory.createForClass(File)