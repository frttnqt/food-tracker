import mongoose, { Schema, Document } from 'mongoose';
import { Place } from '@src/models/placeSchema';

export interface IPosition {
	name: string;
	price: number;
	description: string;
}

export interface IPositionList {
	items: IPosition[];
	placeId: string;
}

export interface PositionModel extends IPosition, Document {}

const PositionSchema: Schema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String },
	place: { type: Schema.Types.ObjectId, ref: Place, required: true }
});

export const Position = mongoose.model<PositionModel>('Position', PositionSchema);
