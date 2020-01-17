import { Request, Response } from 'express';
import { IPlace, Place, PlaceModel } from '@src/models';

export class PlaceService {
	public static async addPlace(place: IPlace): Promise<PlaceModel> {
		return await Place.create(place);
	}

	public static async getPlace(req: Request, res: Response): Promise<void> {}

	public static async getPlaceList(req: Request, res: Response): Promise<void> {}

	public static async updatePlace(req: Request, res: Response): Promise<void> {}

	public static async removePlace(req: Request, res: Response): Promise<void> {}
}
