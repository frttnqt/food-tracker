import { IUser, User, UserModel, UserPublicData } from '@src/models';
import { keys } from '@src/config';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

export class UserService {
	public static async createUser(userData: IUser): Promise<UserPublicData> {
		const user = await User.create({
			...userData,
			password: await bcrypt.hash(userData.password, saltRounds)
		});
		return this.getUserInfo(user);
	}

	public static async login(user: IUser): Promise<UserPublicData | null> {
		const dbUser = await User.findOne({
			email: user.email
		});
		return (await bcrypt.compare(user.password, dbUser?.password)) && dbUser ? this.getUserInfo(dbUser) : null;
	}

	public static getUserInfo(user: UserModel): UserPublicData {
		return {
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName
		};
	}

	public static getJSONWebToken(user: UserPublicData): string {
		return jwt.sign(
			{
				data: {
					email: user.email,
					firstName: user.firstName,
					lastName: user.lastName
				}
			},
			keys.jsonWebTokenKey,
			{ algorithm: 'HS512' }
		);
	}
}
