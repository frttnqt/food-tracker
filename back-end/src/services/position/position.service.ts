import { IPositionList, Order, Position, PositionModel } from '@src/models';

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

	public static async getPosition(positionId: string): Promise<PositionModel | null> {
		return await Position.findById(positionId);
	}

	public static async getPositionList(placeId?: string): Promise<PositionModel[]> {
		return placeId ? Position.find({ placeId }) : Position.find({});
	}

	public static async updatePositions(positions: IPositionList): Promise<PositionModel[]> {
		const bulkWriteCondition = positions.items.map(item => ({ replaceOne: { update: item } }));
		return (await Position.bulkWrite([bulkWriteCondition])).result;
	}

	public static async deletePositions(positionIds: string[]): Promise<void> {
		await Position.deleteMany({ id: { $in: positionIds } });
		await Order.deleteMany({ positionIds: { $elemMatch: { $in: positionIds } } });
	}
}
