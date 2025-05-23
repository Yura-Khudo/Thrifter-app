import mongoose from "mongoose";

export interface UserInt extends mongoose.Document {
	firstName: string;
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
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true, collection: "users" }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
