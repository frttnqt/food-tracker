import { IUser, Order, User, UserModel, UserPublicData } from '@src/models';
import { keys } from '@src/config';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

export class UserService {
	public static async createUser(userData: IUser): Promise<UserModel> {
		return await User.create({
			...userData,
			password: await bcrypt.hash(userData.password, saltRounds)
		});
	}

	public static async login(user: IUser): Promise<UserModel | null> {
		const dbUser = await User.findOne({
			email: user.email
		});
		return (await bcrypt.compare(user.password, dbUser?.password)) && dbUser ? dbUser : null;
	}

	public static async updateUser(user: UserModel, token: string | undefined): Promise<UserModel> {
		return jwt.verify(token, keys.jsonWebTokenKey, { id: user.id }, async (err: Error, decoded: UserPublicData) => {
			if (decoded) {
				const dbUser = await User.findByIdAndUpdate(decoded.id, {
					...user,
					password: await bcrypt.hash(user.password, saltRounds)
				});
				return dbUser ? dbUser : null;
			}
		});
	}

	public static async deleteUser(userId: string, token: string | undefined): Promise<void> {
		jwt.verify(token, keys.jsonWebTokenKey, { id: userId }, async (err: Error, decoded: UserPublicData) => {
			if (decoded) {
				await User.findByIdAndDelete(userId);
				await Order.deleteMany({ userId });
			}
		});
	}

	public static getJSONWebToken(user: UserModel): string {
		return jwt.sign(
			{
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
				id: user.id
			},
			keys.jsonWebTokenKey,
			{ algorithm: 'HS512' }
		);
	}
}
