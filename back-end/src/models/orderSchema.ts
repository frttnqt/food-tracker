import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder {
	user: string;
	positions: string[];
	date: Date;
}

export interface OrderModel extends IOrder, Document {}

const OrderSchema: Schema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	positions: [{ type: Schema.Types.ObjectId, ref: 'Position', required: true }],
	date: { type: Schema.Types.Date, required: true }
});

export const Order = mongoose.model<OrderModel>('Order', OrderSchema);
