import { IUser } from '@src/models';
import { Request, Response } from 'express';
import { UserService } from '@src/services';

export class PositionController {
	public static async createPosition(req: Request, res: Response): Promise<void> {}

	public static async getPosition(req: Request, res: Response): Promise<void> {}

	public static async getPositionList(req: Request, res: Response): Promise<void> {}

	public static async updatePosition(req: Request, res: Response): Promise<void> {}

	public static async removePosition(req: Request, res: Response): Promise<void> {}
}
