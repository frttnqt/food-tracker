import { Request, Response } from 'express';
import { LocationService } from '@src/services/location';

export class LocationController {
	public static async createLocation(req: Request, res: Response): Promise<void> {
		try {
			const location = await LocationService.createLocation(req.body?.location);
			res.status(200).send(location);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async getOrderList(req: Request, res: Response): Promise<void> {}

	public static async editOrder(req: Request, res: Response): Promise<void> {}

	public static async removeOrder(req: Request, res: Response): Promise<void> {}
}
