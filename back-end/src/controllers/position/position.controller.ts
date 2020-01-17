import { Request, Response } from 'express';
import { PositionService } from '@src/services/position';

export class PositionController {
	public static async addPositions(req: Request, res: Response): Promise<void> {
		try {
			const positions = await PositionService.addPositions(req.body.positions);
			positions.length ? res.status(200).send({ positions }) : res.sendStatus(400);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async getPosition(req: Request, res: Response): Promise<void> {}

	public static async getPositionList(req: Request, res: Response): Promise<void> {}

	public static async updatePosition(req: Request, res: Response): Promise<void> {}

	public static async removePosition(req: Request, res: Response): Promise<void> {}
}
