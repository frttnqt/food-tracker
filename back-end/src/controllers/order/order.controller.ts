import { Request, Response } from 'express';

export class OrderController {
	public static async createOrder(req: Request, res: Response): Promise<void> {}

	public static async getOrderList(req: Request, res: Response): Promise<void> {}

	public static async editOrder(req: Request, res: Response): Promise<void> {}

	public static async removeOrder(req: Request, res: Response): Promise<void> {}
}
