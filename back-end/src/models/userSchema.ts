import mongoose, { Schema, Document } from 'mongoose';

export interface IUser {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
}

export interface UserModel extends IUser, Document {}

const UserSchema: Schema = new Schema({
	email: { type: String, required: true, unique: true },
	firstName: { type: String, required: true, unique: true },
	lastName: { type: String, required: true, unique: true },
	password: { type: String, required: true, unique: true }
});

export const User = mongoose.model<UserModel>('User', UserSchema);
