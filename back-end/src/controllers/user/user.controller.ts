import { IUser } from '@src/models';
import { Request, Response } from 'express';
import { UserService } from '@src/services';

export class UserController {
	public static async addUser(req: Request, res: Response): Promise<void> {
		try {
			const user: IUser = await UserService.createUser(req.body.user);
			res.status(200).send({
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName
			});
		} catch (err) {
			res.send(err);
		}
	}

	public static async login(req: Request, res: Response): Promise<void> {
		try {
			const user: IUser | null = await UserService.login(req.body.user);
			user ? res.status(200).send(user) : res.sendStatus(400);
		} catch (err) {
			res.send(err);
		}
	}
}
