import { IOrder, Location, Order, OrderModel } from '@src/models';
import { ILocation, LocationModel } from '@src/models/locationSchema';

export class OrderService {
	public static async createOrder(order: IOrder): Promise<OrderModel> {
		return await Order.create(order);
	}

	public static async getOrder(orderId: string): Promise<OrderModel | null> {
		return await Order.findById(orderId);
	}

	public static async getOrderList(userId: string, date: Date): Promise<OrderModel[]> {
		return await Order.find({ userId, date });
	}

	public static async updateOrder(orderId: string, orderData: IOrder): Promise<OrderModel | null> {
		return await Order.findByIdAndUpdate(orderId, orderData, { new: true });
	}

	public static async deleteOrder(orderId: string): Promise<void> {
		await Order.findOneAndDelete(orderId);
	}
}
