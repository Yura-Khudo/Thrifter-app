import mongoose, { Types } from "mongoose";

export interface UserInt extends mongoose.Document {
	firstName: string;
	_id: Types.ObjectId;
	lastName: string;
	email: string;
	password: string;
}

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true, collection: "users" }
);

const User: mongoose.Model<UserInt> =
	mongoose.models.User || mongoose.model<UserInt>("User", UserSchema);

export default User;
