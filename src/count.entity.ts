import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Count {
    @Prop({required:true, type:Number,})
    count;
}

export const CountSchema = SchemaFactory.createForClass(Count);

export type CountDoc = Count & Document;