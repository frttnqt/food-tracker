import mongoose, { Schema, Document } from 'mongoose';

export interface IUser {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	accessLevel: number;
}

export interface UserPublicData {
	email: string;
	firstName: string;
	lastName: string;
	id: string;
}

export interface UserModel extends IUser, Document {}

const UserSchema: Schema = new Schema({
	email: { type: String, required: true, unique: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	password: { type: String, required: true },
	accessLevel: { type: Number, required: true, default: 0, select: false }
});

UserSchema.methods.getInfo = function() {
	return this.set({ password: null });
};

export const User = mongoose.model<UserModel>('User', UserSchema);
