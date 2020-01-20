import { UserModel, UserPublicData } from '@src/models';
import { Request, Response } from 'express';
import { UserService } from '@src/services';

export class UserController {
	public static async addUser(req: Request, res: Response): Promise<void> {
		try {
			const user: UserModel = await UserService.createUser(req.body.user);
			user ? res.status(200).send({ token: UserService.getJSONWebToken(user) }) : res.sendStatus(400);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async login(req: Request, res: Response): Promise<void> {
		try {
			const user: UserModel | null = await UserService.login(req.body?.user);
			user ? res.status(200).send({ token: UserService.getJSONWebToken(user) }) : res.sendStatus(400);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async updateUser(req: Request, res: Response): Promise<void> {
		try {
			const user: UserModel | void = await UserService.updateUser(req.body?.user, req.headers.authorization);
			user ? res.status(200).send({ token: UserService.getJSONWebToken(user) }) : res.sendStatus(400);
		} catch {
			res.sendStatus(400);
		}
	}

	public static async deleteUser(req: Request, res: Response): Promise<void> {
		try {
			await UserService.deleteUser(req.params?.id, req.headers.authorization);
			res.sendStatus(200);
		} catch {
			res.sendStatus(400);
		}
	}
}
