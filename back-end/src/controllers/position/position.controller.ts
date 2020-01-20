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

	public static async getPosition(req: Request, res: Response): Promise<void> {
		try {
			const position = await PositionService.getPosition(req.params?.id);
			position ? res.status(200).send({ position }) : res.sendStatus(400);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async getPositionList(req: Request, res: Response): Promise<void> {
		try {
			const positionList = await PositionService.getPositionList(req.params?.id);
			positionList ? res.status(200).send({ positionList }) : res.sendStatus(400);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async updatePositions(req: Request, res: Response): Promise<void> {
		try {
			const positions = await PositionService.updatePositions(req.body.positions);
			positions.length ? res.status(200).send({ positions }) : res.sendStatus(400);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async deletePositions(req: Request, res: Response): Promise<void> {
		try {
			await PositionService.deletePositions(req.body.positionIds);
			res.sendStatus(200);
		} catch {
			res.sendStatus(400);
		}
	}
}
