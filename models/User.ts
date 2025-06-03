import mongoose, { Types } from "mongoose";
import { ClothingInt } from "./Clothing";

export interface UserInt extends mongoose.Document {
	_id: Types.ObjectId;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	listings: mongoose.Schema.Types.ObjectId[] | ClothingInt[];
	favorites: mongoose.Schema.Types.ObjectId[] | ClothingInt[];
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
		listings: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Clothing",
				required: true,
			},
		],
		favorites: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Clothing",
				required: true,
			},
		],
	},
	{ timestamps: true, collection: "users" }
);

const User: mongoose.Model<UserInt> =
	mongoose.models.User || mongoose.model<UserInt>("User", UserSchema);

export default User;
