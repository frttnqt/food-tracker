import mongoose, { Schema, Document } from 'mongoose';

export interface IPosition {
	name: string;
	placeId: string;
}

export interface PositionModel extends IPosition, Document {}

const PositionSchema: Schema = new Schema({
	name: { type: String, required: true, unique: true },
	place: { type: Schema.Types.ObjectId, ref: 'Place', required: true }
});

export const Position = mongoose.model<PositionModel>('Position', PositionSchema);
