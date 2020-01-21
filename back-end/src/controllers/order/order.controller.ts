import { Request, Response } from 'express';
import { OrderService } from '@src/services/order';

export class OrderController {
	public static async createOrder(req: Request, res: Response): Promise<void> {
		try {
			const order = await OrderService.createOrder(req.body?.order);
			order ? res.status(200).send({ order }) : res.sendStatus(400);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async getOrderList(req: Request, res: Response): Promise<void> {
		try {
			const orderList = await OrderService.getOrderList(req.params?.orderId, req.query?.date);
			orderList ? res.status(200).send({ orderList }) : res.sendStatus(400);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async getOrder(req: Request, res: Response): Promise<void> {
		try {
			const order = await OrderService.getOrder(req.params?.orderId);
			order ? res.status(200).send({ order }) : res.sendStatus(400);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async updateOrder(req: Request, res: Response): Promise<void> {
		try {
			const order = await OrderService.updateOrder(req.params?.orderId, req.body?.order);
			order ? res.status(200).send({ order }) : res.sendStatus(400);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async deleteOrder(req: Request, res: Response): Promise<void> {
		try {
			await OrderService.deleteOrder(req.params?.orderId);
			res.sendStatus(200);
		} catch {
			res.sendStatus(400);
		}
	}
}
