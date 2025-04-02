import mongoose from "mongoose";

export interface ClothingInt extends mongoose.Document {
	type: string;
	name: string;
	color: string;
	price: number;
	negotiablePrice: boolean;
	condition: string;
	size: string;
}

export const typesOfClothes = [
	"t-shirt",
	"jeans",
	"skirt",
	"hoodie",
	"jacket",
	"shorts",
	"dress",
];
export const conditionsOfClothes = ["Brand new", "Pre-owned", "Restored"];
export const sizeOfClothes = ["XS", "S", "M", "L", "XL"];

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
		color: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			min: 1,
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
			enum: sizeOfClothes,
			required: true,
		},
	},
	{
		collection: "clothings",
	}
);

export default mongoose.models.Clothing ||
	mongoose.model("Clothing", ClothingSchema);
export const clothes = [
	{
		type: "t-shirt",
		name: "Casual Tee",
		color: "blue",
		price: 20,
		negotiablePrice: true,
		condition: "Brand new",
		size: "M",
	},
	{
		type: "t-shirt",
		name: "Graphic Tee",
		color: "red",
		price: 22,
		negotiablePrice: false,
		condition: "Pre-owned",
		size: "S",
	},
	{
		type: "t-shirt",
		name: "V-Neck Tee",
		color: "black",
		price: 25,
		negotiablePrice: true,
		condition: "Restored",
		size: "L",
	},
	{
		type: "jeans",
		name: "Slim Fit Jeans",
		color: "black",
		price: 50,
		negotiablePrice: false,
		condition: "Pre-owned",
		size: "L",
	},
	{
		type: "jeans",
		name: "Regular Fit Jeans",
		color: "blue",
		price: 55,
		negotiablePrice: true,
		condition: "Brand new",
		size: "M",
	},
	{
		type: "jeans",
		name: "Ripped Jeans",
		color: "white",
		price: 60,
		negotiablePrice: false,
		condition: "Restored",
		size: "S",
	},
	{
		type: "skirt",
		name: "Pleated Skirt",
		color: "red",
		price: 35,
		negotiablePrice: true,
		condition: "Restored",
		size: "S",
	},
	{
		type: "skirt",
		name: "Denim Skirt",
		color: "blue",
		price: 40,
		negotiablePrice: false,
		condition: "Brand new",
		size: "L",
	},
	{
		type: "skirt",
		name: "Floral Skirt",
		color: "yellow",
		price: 38,
		negotiablePrice: true,
		condition: "Pre-owned",
		size: "M",
	},
	{
		type: "hoodie",
		name: "Warm Hoodie",
		color: "white",
		price: 60,
		negotiablePrice: false,
		condition: "Brand new",
		size: "XL",
	},
	{
		type: "hoodie",
		name: "Oversized Hoodie",
		color: "black",
		price: 70,
		negotiablePrice: true,
		condition: "Restored",
		size: "L",
	},
	{
		type: "hoodie",
		name: "Zip Hoodie",
		color: "blue",
		price: 65,
		negotiablePrice: false,
		condition: "Pre-owned",
		size: "M",
	},
	{
		type: "jacket",
		name: "Leather Jacket",
		color: "yellow",
		price: 120,
		negotiablePrice: true,
		condition: "Pre-owned",
		size: "M",
	},
	{
		type: "jacket",
		name: "Denim Jacket",
		color: "blue",
		price: 90,
		negotiablePrice: false,
		condition: "Brand new",
		size: "L",
	},
	{
		type: "jacket",
		name: "Bomber Jacket",
		color: "green",
		price: 110,
		negotiablePrice: true,
		condition: "Restored",
		size: "XL",
	},
	{
		type: "shorts",
		name: "Summer Shorts",
		color: "green",
		price: 25,
		negotiablePrice: false,
		condition: "Brand new",
		size: "S",
	},
	{
		type: "shorts",
		name: "Denim Shorts",
		color: "blue",
		price: 35,
		negotiablePrice: true,
		condition: "Restored",
		size: "M",
	},
	{
		type: "shorts",
		name: "Cargo Shorts",
		color: "black",
		price: 40,
		negotiablePrice: false,
		condition: "Pre-owned",
		size: "L",
	},
	{
		type: "dress",
		name: "Evening Gown",
		color: "black",
		price: 80,
		negotiablePrice: true,
		condition: "Restored",
		size: "L",
	},
	{
		type: "dress",
		name: "Cocktail Dress",
		color: "red",
		price: 90,
		negotiablePrice: false,
		condition: "Brand new",
		size: "M",
	},
	{
		type: "dress",
		name: "Maxi Dress",
		color: "yellow",
		price: 100,
		negotiablePrice: true,
		condition: "Pre-owned",
		size: "S",
	},
	{
		type: "dress",
		name: "Wrap Dress",
		color: "blue",
		price: 95,
		negotiablePrice: false,
		condition: "Restored",
		size: "XL",
	},
	{
		type: "dress",
		name: "Bodycon Dress",
		color: "green",
		price: 110,
		negotiablePrice: true,
		condition: "Brand new",
		size: "M",
	},
];
