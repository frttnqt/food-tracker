import { Request, Response } from 'express';
import { IPlace, Place, PlaceModel, Position } from '@src/models';

export class PlaceService {
	public static async addPlace(place: IPlace): Promise<PlaceModel> {
		return await Place.create(place);
	}

	public static async getPlace(name: string): Promise<PlaceModel | null> {
		return await Place.findOne({ name });
	}

	public static async getPlaceList(req: Request, res: Response): Promise<void> {}

	public static async updatePlace(req: Request, res: Response): Promise<void> {}

	public static async removePlace(name: string): Promise<void> {
		const place = await Place.findOneAndDelete({ name });
		await Position.deleteMany({ place: place?._id });
	}
}
