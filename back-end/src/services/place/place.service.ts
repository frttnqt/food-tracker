import { Request, Response } from 'express';
import { IPlace, Place, PlaceModel, Position } from '@src/models';

export class PlaceService {
	public static async addPlace(place: IPlace): Promise<PlaceModel> {
		return await Place.create(place);
	}

	public static async getPlace(placeId: string): Promise<PlaceModel | null> {
		return await Place.findById(placeId);
	}

	public static async getPlaceList(): Promise<PlaceModel[]> {
		return await Place.find({});
	}

	public static async updatePlace(place: IPlace, placeId: string): Promise<PlaceModel | null> {
		return await Place.findByIdAndUpdate(placeId, place, { new: true });
	}

	public static async removePlace(placeId: string): Promise<void> {
		const place = await Place.findByIdAndDelete(placeId);
		await Position.deleteMany({ place: place?.id });
	}
}
