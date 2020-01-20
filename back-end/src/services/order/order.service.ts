import { Location, Order } from '@src/models';
import { ILocation, LocationModel } from '@src/models/locationSchema';

export class OrderService {
	public static async createLocation(location: ILocation): Promise<LocationModel> {
		return await Location.create(location);
	}

	public static async getLocationList(): Promise<LocationModel[]> {
		return await Location.find({});
	}

	public static async updateLocation(location: ILocation, locationId: string): Promise<LocationModel | null> {
		return await Location.findByIdAndUpdate(locationId, location, { new: true });
	}

	public static async deleteLocation(locationId: string): Promise<void> {
		await Location.findByIdAndDelete(locationId);
		await Order.deleteMany({ locationId });
	}
}
