import { z } from "zod";
import {
	conditionsOfClothes,
	typesOfClothes,
	allSizes,
	clothingGenders,
} from "./arrUtils";

export const sellClothingSchema = z.object({
	type: z.string().refine((val) => typesOfClothes.includes(val), {
		message: "Choose one of the proposed types of clothing",
	}),
	name: z
		.string()
		.min(3, { message: "The name of clothing must be at least 3 letters" })
		.max(70, { message: "The name of clothing must be less than 70 letters" }),
	// price: z
	// 	.number({ message: "Please enter valid price" })
	// 	.nonnegative({ message: "Please enter valid price" }),
	price: z
		.string()
		.min(1, { message: "Please enter a valid price" })
		.transform((val) => Number(val))
		.refine((val) => val > 0, { message: "Please enter a valid price" }),
	description: z
		.string()
		.min(15, { message: "Descritpion is too short, add more details" })
		.max(400, { message: "Description is too long" }),
	condition: z.string().refine((val) => conditionsOfClothes.includes(val), {
		message: "Choose one of the proposed conditions of clothes",
	}),
	size: z.string().refine((val) => allSizes.includes(val), {
		message: "Choose one of the proposed sizes",
	}),
	gender: z.string().refine((val) => clothingGenders.includes(val), {
		message: "Choose one of the proposed genders",
	}),
});
