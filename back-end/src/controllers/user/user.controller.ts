import { UserModel, UserPublicData } from '@src/models';
import { Request, Response } from 'express';
import { UserService } from '@src/services';

export class UserController {
	public static async addUser(req: Request, res: Response): Promise<void> {
		try {
			const user: UserPublicData = await UserService.createUser(req.body.user);
			user ? res.status(200).send({ token: UserService.getJSONWebToken(user) }) : res.sendStatus(400);
		} catch (err) {
			res.sendStatus(400);
		}
	}

	public static async login(req: Request, res: Response): Promise<void> {
		try {
			const user: UserPublicData | null = await UserService.login(req.body.user);
			user ? res.status(200).send({ token: UserService.getJSONWebToken(user) }) : res.sendStatus(400);
		} catch (err) {
			res.sendStatus(400);
		}
	}
}
