import { IPositionList, Position, PositionModel } from '@src/models';

export class PositionService {
	public static async addPositions(positions: IPositionList): Promise<PositionModel[]> {
		return await Position.insertMany(
			positions.items.map(item => ({
				name: item.name,
				place: positions.placeId,
				price: item.price
			}))
		);
	}
}
