import { IUser, User, UserModel } from '@src/models';

export class UserService {
	public static async createUser(userData: IUser): Promise<UserModel> {
		return await User.create(userData);
	}
}
