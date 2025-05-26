"use server";

import Clothing from "@/models/Clothing";
import dbConnect from "./dbConnect";
import { clothes } from "@/utils/arrUtils";
import { sellClothingSchema, registerUserSchema } from "@/utils/validations";
import { redirect } from "next/navigation";
import mongoose from "mongoose";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { createSession } from "./session";

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

	const clothing = new Clothing({
		...validation.data,
		price: Number(price).toFixed(2),
		negotiablePrice,
	});
	await clothing.save();
	redirect("/");
}

export async function findClothes(params: {
	[key: string]: string | string[] | undefined;
}) {
	const {
		type,
		name,
		minPrice,
		maxPrice,
		negotiablePrice,
		condition,
		size,
		gender,
	} = params;

	const query: any = {};
	if (type) {
		query.type = { $in: type };
	}
	if (name) {
		query.name = { $regex: name, $options: "i" };
	}
	if (condition) {
		query.condition = { $in: condition };
	}
	if (size) {
		query.size = { $in: size };
	}
	if (gender) {
		query.gender = { $in: gender };
	}
	if (negotiablePrice) {
		query.negotiablePrice = { $in: negotiablePrice };
	}
	if (minPrice && maxPrice) {
		query.price = {
			$gt: +minPrice,
			$lte: +maxPrice,
		};
	}

	await dbConnect();
	const clothes = await Clothing.find(query);
	return clothes;
}

export async function filter(state: any, formData: FormData) {
	const name = formData.get("name") as string;
	const minPrice = formData.get("minPrice") as string;
	const maxPrice = formData.get("maxPrice") as string;
	const negotiablePrice =
		(formData.get("negotiablePrice") as string | null) === "on" ? true : false;
	const types = formData.getAll("type") as string[];
	const conditions = formData.getAll("condition") as string[];
	const sizes = formData.getAll("size") as string[];
	const genders = formData.getAll("gender") as string[];

	const searchParams = new URLSearchParams();

	if (name) {
		searchParams.append("name", name);
	}
	if (minPrice) {
		searchParams.append("minPrice", minPrice);
	}
	if (maxPrice) {
		searchParams.append("maxPrice", maxPrice);
	}
	if (negotiablePrice) {
		searchParams.append("negotiablePrice", negotiablePrice.toString());
	}

	types.forEach((type) => searchParams.append("type", type));
	conditions.forEach((condition) =>
		searchParams.append("condition", condition)
	);
	sizes.forEach((size) => searchParams.append("size", size));
	genders.forEach((gender) => searchParams.append("gender", gender));
	const url = `/search?${searchParams.toString()}`;

	redirect(url);
}

export async function fetchClothingData(clothingId: string) {
	if (!mongoose.Types.ObjectId.isValid(clothingId)) {
		return null; // add page 404 later
	}
	await dbConnect();
	const clothing = await Clothing.findById(clothingId);
	return clothing;
}

export async function registerUser(state: any, formData: FormData) {
	const data = {
		firstName: formData.get("firstName") as string,
		lastName: formData.get("lastName") as string,
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	await dbConnect();

	const isUser = await User.findOne({ email: data.email });
	const validation = registerUserSchema.safeParse(data);

	if (!validation.success) {
		if (isUser) {
			return {
				error: validation.error.flatten().fieldErrors,
				data,
				user: ["Email already in use"],
			};
		}
		return {
			error: validation.error.flatten().fieldErrors,
			data,
		};
	}

	data.password = await hashPassword(data.password);

	const user = new User(data);
	await user.save();
	await createSession(user._id);

	return redirect("/");
}

export async function loginUser(state: any, formData: FormData) {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const user = await User.findOne({ email });

	if (!user) {
		return {
			error: ["Incorrect email or password"],
			data: { email },
		};
	}

	const isValidPass = await isValidPassword(password, user.password);

	if (!isValidPass) {
		return {
			error: ["Incorrect email or password"],
			data: { email },
		};
	}
	await createSession(user._id);

	return redirect("/");
}

async function hashPassword(password: string) {
	const saltRounds = 10;
	const hashPassword = await bcrypt.hash(password, saltRounds);
	return hashPassword;
}

async function isValidPassword(password: string, hashedPassword: string) {
	return await bcrypt.compare(password, hashedPassword);
}
