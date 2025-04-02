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

export async function sellClothing(state: any, formData: FormData) {
	await dbConnect();

	// const product = await Product.create({ title });
	const clothing = new Clothing({});
	// await clothing.save();
	console.log(clothing);
}
