"use server";

import Clothing from "@/models/Clothing";
import dbConnect from "./dbConnect";
import { clothes } from "@/utils/arrUtils";
import { sellClothingSchema } from "@/utils/validations";
import { redirect } from "next/navigation";

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
	const negotiablePrice =
		(formData.get("negotiablePrice") as string | null) === "on" ? true : false;
	const type = formData.get("type") as string;
	const name = formData.get("name") as string;
	const price = formData.get("price") as string;
	const description = formData.get("description") as string;
	const condition = formData.get("condition") as string;
	const size = formData.get("size") as string;
	const gender = formData.get("gender") as string;
	const validation = sellClothingSchema.safeParse({
		type,
		name,
		price,
		description,
		condition,
		size,
		gender,
	});

	if (!validation.success) {
		return {
			error: validation.error?.flatten().fieldErrors,
			data: {
				type,
				name,
				price,
				negotiablePrice,
				description,
				condition,
				size,
				gender,
			},
		};
	}

	await dbConnect();

	const clothing = new Clothing({ ...validation.data, negotiablePrice });
	await clothing.save();
	redirect("/");
}
