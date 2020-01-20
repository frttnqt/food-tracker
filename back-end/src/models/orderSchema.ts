import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder {
	positionIds: string[];
	date: Date;
	userId: string;
	locationId: string;
}

export interface OrderModel extends IOrder, Document {}

const OrderSchema: Schema = new Schema({
	positionIds: [{ type: Schema.Types.ObjectId, ref: 'Position', required: true }],
	date: { type: Schema.Types.Date, required: true },
	userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	locationId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export const Order = mongoose.model<OrderModel>('Order', OrderSchema);
