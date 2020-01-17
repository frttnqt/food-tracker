import mongoose, { Schema, Document } from 'mongoose';

export interface IUser {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
}

export interface UserPublicData {
	email: string;
	firstName: string;
	lastName: string;
}

export interface UserModel extends IUser, Document {}

const UserSchema: Schema = new Schema({
	email: { type: String, required: true, unique: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	password: { type: String, required: true }
});

UserSchema.methods.getInfo = function() {
	return this.set({ password: null });
};

export const User = mongoose.model<UserModel>('User', UserSchema);
