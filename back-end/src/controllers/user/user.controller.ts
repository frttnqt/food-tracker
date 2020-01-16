import { IUser } from '@src/models';
import { Request, Response } from 'express';
import { UserService } from '@src/services';

export class UserController {
	public static async addUser(req: Request, res: Response): Promise<void> {
		try {
			const userProfile: IUser = await UserService.createUser(req.body);
		} catch (err) {
			res.send(err);
		}
	}
}
