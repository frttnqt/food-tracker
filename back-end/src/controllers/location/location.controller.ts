import { Request, Response } from 'express';
import { LocationService } from '@src/services/location';

export class LocationController {
	public static async createLocation(req: Request, res: Response): Promise<void> {
		try {
			const location = await LocationService.createLocation(req.body?.location);
			location ? res.status(200).send(location) : res.sendStatus(400);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async getLocationList(req: Request, res: Response): Promise<void> {
		try {
			const locationList = await LocationService.getLocationList();
			res.status(200).send(locationList);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async updateLocation(req: Request, res: Response): Promise<void> {
		try {
			const location = await LocationService.updateLocation(req.body?.location, req.params?.id);
			res.status(200).send(location);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async deleteLocation(req: Request, res: Response): Promise<void> {
		try {
			await LocationService.deleteLocation(req.params?.id);
			res.sendStatus(200);
		} catch {
			res.sendStatus(400);
		}
	}
}
