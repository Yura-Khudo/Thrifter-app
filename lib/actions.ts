"use server";

import Product from "@/models/Product";
import dbConnect from "./dbConnect";

export async function createProduct(state: any, formData: FormData) {
	const title = formData.get("title");

	await dbConnect();

	// const product = await Product.create({ title });
	const product = new Product({ title });
	await product.save();
	console.log(product);
}
