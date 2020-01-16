import { IUser, User, UserModel } from '@src/models';

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
		return (await bcrypt.compare(user.password, dbUser?.password)) ? dbUser : null;
	}
}
