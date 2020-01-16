import mongoose, { Schema, Document } from 'mongoose';

export interface IPlace {
	name: string;
}

export interface PlaceModel extends IPlace, Document {}

const PlaceSchema: Schema = new Schema({
	name: { type: String, required: true, unique: true }
});

export const Place = mongoose.model<PlaceModel>('Place', PlaceSchema);
