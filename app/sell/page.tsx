"use client";

import Checkbox from "@/components/Checkbox/Checkbox";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import { sellClothing } from "@/lib/actions";
import {
	conditionsOfClothes,
	typesOfClothes,
	clothesWithSizes,
	clothingGenders,
	clothingCategories,
} from "@/utils/arrUtils";
import { useActionState, useState, useRef } from "react";
import classes from "./page.module.css";

const Page: React.FC = () => {
	// DropdownMenu dynamic changes //

	const [state, action, isPending] = useActionState(sellClothing, null);
	const [sizes, setSizes] = useState<string[]>([]);
	const [types, setTypes] = useState<string[] | null>(null);

	function handleSizeChange(value: string) {
		const currSize = clothesWithSizes.find(
			(clothing) => clothing.type === value
		);
		setSizes(currSize!.sizes);
	}

	function handleTypesChange(value: string) {
		setTypes(clothingCategories[value as keyof typeof clothingCategories]);
	}

	////
	// Letters Counter //

	const inputRef = useRef<HTMLInputElement>(null);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [inputCount, setInputCount] = useState<number>(
		inputRef.current?.value.length || 0
	);
	const [textAreaCount, setTextAreaCount] = useState<number>(
		textAreaRef.current?.value.length || 0
	);
	function handleTextAreaChange() {
		setTextAreaCount(textAreaRef.current?.value.length ?? 0);
	}
	function handleInputChange() {
		setInputCount(inputRef.current?.value.length ?? 0);
	}

	////

	return (
		<form className={classes.form} action={action}>
			<div className={classes.main}>
				<h1 className={classes.header}>Sell your clothing</h1>
				<div className={classes.container}>
					<Input
						nameRef={inputRef}
						setCount={handleInputChange}
						name="name"
						defaultValue={state?.data.name}
					/>
					<div className={classes.validationMessage}>
						<p className={`${inputCount > 70 && classes.countError}`}>
							{inputCount}/70
						</p>
						{state?.error.name && <ErrorMessage message={state.error.name} />}
					</div>

					<DropdownMenu
						handleChange={handleSizeChange}
						name="type"
						arr={types || typesOfClothes}
						defaultValue={
							(types && types[0]) || state?.data.type || "Choose your type"
						}
					/>
					{state?.error.type && <ErrorMessage message={state.error.type} />}
				</div>
				<div className={classes.container}>
					<DropdownMenu
						handleChange={handleTypesChange}
						name="gender"
						arr={clothingGenders}
						defaultValue={state?.data.gender || "Choose your gender"}
					/>
					{state?.error.gender && <ErrorMessage message={state.error.gender} />}
					<DropdownMenu
						name="size"
						arr={sizes}
						defaultValue={
							sizes[0] || state?.data.size || "Choose type of clothing first"
						}
					/>
					{state?.error.size && <ErrorMessage message={state.error.size} />}

					<DropdownMenu
						name="condition"
						arr={conditionsOfClothes}
						defaultValue={state?.data.condition || "Choose your condition"}
					/>
					{state?.error.condition && (
						<ErrorMessage message={state.error.condition} />
					)}
				</div>

				<div className={classes.container}>
					<TextArea
						descriptionRef={textAreaRef}
						name="description"
						defaultValue={state?.data.description}
						setCount={handleTextAreaChange}
					/>
					<div className={classes.validationMessage}>
						<p className={`${textAreaCount > 400 && classes.countError}`}>
							{textAreaCount}/400
						</p>
						{state?.error.description && (
							<ErrorMessage message={state.error.description} />
						)}
					</div>
				</div>
				<div className={`${classes.container} ${classes.spaceBetween}`}>
					<div>
						<Input name="price" defaultValue={state?.data.price} />
						{state?.error.price && (
							<ErrorMessage message={[state?.error.price[0]]} />
						)}

						<Checkbox
							name="negotiablePrice"
							strictName="Negotiable price"
							isChecked={state?.data.negotiablePrice}
						/>
					</div>
					<div className={classes.buttonContainer}>
						<button disabled={isPending} className={classes.button}>
							{isPending ? "Uploading..." : "Sell"}
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Page;
