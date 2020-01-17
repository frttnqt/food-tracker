import { Request, Response } from 'express';
import { PlaceService } from '@src/services/place';

export class PlaceController {
	public static async addPlace(req: Request, res: Response): Promise<void> {
		try {
			const place = await PlaceService.addPlace(req.body.place);
			res.status(200).send(place);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async getPlace(req: Request, res: Response): Promise<void> {
		try {
			const place = await PlaceService.getPlace(req.params?.name);
			res.status(200).send(place);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async getPlaceList(req: Request, res: Response): Promise<void> {}

	public static async updatePlace(req: Request, res: Response): Promise<void> {}

	public static async removePlace(req: Request, res: Response): Promise<void> {
		try {
			await PlaceService.removePlace(req.params.name);
			res.sendStatus(200);
		} catch {
			res.sendStatus(400);
		}
	}
}
