import { IUser } from '@src/models';
import { Request, Response } from 'express';
import { UserService } from '@src/services';

export class PlaceController {
	public static async createPlace(req: Request, res: Response): Promise<void> {}

	public static async getPlace(req: Request, res: Response): Promise<void> {}

	public static async getPlaceList(req: Request, res: Response): Promise<void> {}

	public static async updatePlace(req: Request, res: Response): Promise<void> {}

	public static async removePlace(req: Request, res: Response): Promise<void> {}
}
