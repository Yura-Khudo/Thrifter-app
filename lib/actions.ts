"use server";

import Clothing, { clothes } from "@/models/Clothing";
import dbConnect from "./dbConnect";

///////////////////

export async function updateDB(state: any, formData: FormData) {
	await dbConnect();
	await Clothing.deleteMany({});
	clothes.map(async (el) => {
		let clothing = new Clothing(el);
		await clothing.save();
	});
}

///////////////////

export async function createProduct(state: any, formData: FormData) {
	const title = formData.get("title");

	await dbConnect();

	// const product = await Product.create({ title });
	const product = new Clothing({ title });
	await product.save();
	console.log(product);
}
