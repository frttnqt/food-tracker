import { Request, Response } from 'express';
import { IPlace, Place, PlaceModel, Position, Location } from '@src/models';
import { ILocation, LocationModel } from '@src/models/locationSchema';

export class LocationService {
	public static async createLocation(location: ILocation): Promise<LocationModel> {
		return await Location.create(location);
	}

	public static async getPlace(placeId: string): Promise<PlaceModel | null> {
		return await Place.findById(placeId);
	}

	public static async getPlaceList(req: Request, res: Response): Promise<void> {}

	public static async updatePlace(place: IPlace, placeId: string): Promise<PlaceModel | null> {
		return await Place.findByIdAndUpdate(placeId, place, { new: true });
	}

	public static async removePlace(placeId: string): Promise<void> {
		const place = await Place.findByIdAndDelete(placeId);
		await Position.deleteMany({ place: place?.id });
	}
}
