import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation {
	address: string;
}

export interface LocationModel extends ILocation, Document {}

const LocationSchema: Schema = new Schema({
	address: { type: String, required: true }
});

export const Location = mongoose.model<LocationModel>('Location', LocationSchema);
