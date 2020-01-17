import { IUser, User, UserModel } from '@src/models';
import keys from '@src/config/dev';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

export class UserService {
	public static async createUser(userData: IUser): Promise<UserModel> {
		const user = await User.create({
			...userData,
			password: await bcrypt.hash(userData.password, saltRounds)
		});
		return this.getUserInfo(user);
	}

	public static async login(user: IUser): Promise<UserModel | null> {
		const dbUser = await User.findOne({
			email: user.email
		});
		return (await bcrypt.compare(user.password, dbUser?.password)) && dbUser ? this.getUserInfo(dbUser) : null;
	}

	public static getUserInfo(user: UserModel): UserModel {
		return user.set({ password: null });
	}

	public static getJSONWebToken(user: UserModel): string {
		return jwt.sign({ data: user }, keys.jsonWebTokenKey, { algorithm: 'HS512' });
	}
}
