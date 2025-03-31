import mongoose from "mongoose";

export interface ProudctInt extends mongoose.Document {
	title: string;
}

const ProductSchema = new mongoose.Schema({
	title: {
		//Name of a product

		type: String,
		required: true,
	},
});

export default mongoose.models.Product ||
	mongoose.model("Product", ProductSchema);
