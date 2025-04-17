import mongoose from "mongoose";
import {
	allSizes,
	conditionsOfClothes,
	typesOfClothes,
} from "@/utils/arrUtils";

export interface ClothingInt extends mongoose.Document {
	type: string;
	name: string;
	description: boolean;
	price: number;
	negotiablePrice: boolean;
	condition: string;
	size: string;
}

const ClothingSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			enum: typesOfClothes,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			min: 0,
			required: true,
		},
		negotiablePrice: {
			type: Boolean,
			required: true,
		},
		condition: {
			type: String,
			enum: conditionsOfClothes,
			required: true,
		},
		size: {
			type: String,
			enum: allSizes,
			required: true,
		},
	},
	{
		collection: "clothings",
	}
);

export default mongoose.models.Clothing ||
	mongoose.model("Clothing", ClothingSchema);
