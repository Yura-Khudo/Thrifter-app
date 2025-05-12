"use client";

import { useActionState, useRef, useState } from "react";
import classes from "./Filter.module.css";
import FilterSelector from "../FilterSelector/FilterSelector";
import {
	allSizes,
	conditionsOfClothes,
	typesOfClothes,
} from "@/utils/arrUtils";
import { filter } from "@/lib/actions";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useSearchParams } from "next/navigation";

const Filter: React.FC = () => {
	///// Data from params to send into components

	const searchParams = useSearchParams();
	const params = {
		name: searchParams.get("name"),
		minPrice: searchParams.get("minPrice"),
		maxPrice: searchParams.get("maxPrice"),
		negotiablePrice:
			searchParams.get("negotiablePrice") === "true" ? true : false,
		type: searchParams.getAll("type"),
		condition: searchParams.getAll("condition"),
		size: searchParams.getAll("size"),
		gender: searchParams.getAll("gender"),
	};

	/////

	///// Filter Selector state

	const [isTypeOpen, setIsTypeOpen] = useState(false);
	const [isConditionOpen, setIsConditionOpen] = useState(false);
	const [isSizeOpen, setIsSizeOpen] = useState(false);
	const [isGenderOpen, setIsGenderOpen] = useState(false);

	function handleTypeChange(boolean: boolean) {
		setIsConditionOpen(false);
		setIsSizeOpen(false);
		setIsGenderOpen(false);
		setIsTypeOpen(boolean);
	}
	function handleConditionChange(boolean: boolean) {
		setIsConditionOpen(boolean);
		setIsSizeOpen(false);
		setIsGenderOpen(false);
		setIsTypeOpen(false);
	}
	function handleSizeChange(boolean: boolean) {
		setIsConditionOpen(false);
		setIsSizeOpen(boolean);
		setIsGenderOpen(false);
		setIsTypeOpen(false);
	}
	function handleGendereChange(boolean: boolean) {
		setIsConditionOpen(false);
		setIsSizeOpen(false);
		setIsGenderOpen(boolean);
		setIsTypeOpen(false);
	}

	/////

	///// MinMaxPrice Error
	const minPrice = useRef<HTMLInputElement>(null);
	const maxPrice = useRef<HTMLInputElement>(null);

	const [priceInputError, setPriceInputError] = useState(false);

	function handlePriceChange() {
		if (
			/^\d+$/.test(minPrice.current!.value) &&
			/^\d+$/.test(maxPrice.current!.value) &&
			+maxPrice.current!.value > +minPrice.current!.value
		) {
			setPriceInputError(false);
		} else {
			setPriceInputError(true);
		}
	}

	/////

	const [state, action] = useActionState(filter, null);

	return (
		<div>
			<form className={classes.form} action={action}>
				<div>
					<Input name="name" defaultValue={params.name ?? ""} />
					<div className={classes.categoryWrapper}>
						<label>Price</label>
						<div className={classes.priceInputContainer}>
							<div className={classes.inputContainer}>
								<input
									onChange={handlePriceChange}
									defaultValue={params.minPrice || 0}
									ref={minPrice}
									className={classes.input}
									type="text"
									name="minPrice"
								/>
							</div>
							<span className={classes.span}>—</span>
							<div className={classes.inputContainer}>
								<input
									onChange={handlePriceChange}
									defaultValue={params.maxPrice || 99999}
									ref={maxPrice}
									className={classes.input}
									type="text"
									name="maxPrice"
								/>
							</div>
						</div>
					</div>
					{priceInputError && (
						<ErrorMessage message="Please enter valid price" />
					)}
					<Checkbox
						name="negotiablePrice"
						strictName="Negotiable price"
						isChecked={params.negotiablePrice}
					/>
					<div>
						<div className={classes.categoryWrapper}>
							<p
								className={classes.filterSelectorOpener}
								onClick={() => handleTypeChange(true)}
							>
								Types
							</p>
						</div>
						<div className={classes.categoryWrapper}>
							<p
								className={classes.filterSelectorOpener}
								onClick={() => handleConditionChange(true)}
							>
								Conditions
							</p>
						</div>
						<div className={classes.categoryWrapper}>
							<p
								className={classes.filterSelectorOpener}
								onClick={() => handleSizeChange(true)}
							>
								Sizes
							</p>
						</div>
						<div className={classes.categoryWrapper}>
							<p
								className={classes.filterSelectorOpener}
								onClick={() => handleGendereChange(true)}
							>
								Genders
							</p>
						</div>
					</div>
				</div>

				<div className={`${classes.drop} ${isTypeOpen && classes.show}`}>
					<FilterSelector
						arr={typesOfClothes}
						dataArr={params.type}
						close={() => handleTypeChange(false)}
						name="type"
					/>
				</div>
				<div className={`${classes.drop} ${isConditionOpen && classes.show}`}>
					<FilterSelector
						arr={conditionsOfClothes}
						dataArr={params.condition}
						close={() => handleConditionChange(false)}
						name="condition"
					/>
				</div>
				<div className={`${classes.drop} ${isSizeOpen && classes.show}`}>
					<FilterSelector
						arr={allSizes}
						dataArr={params.size}
						close={() => handleSizeChange(false)}
						name="size"
					/>
				</div>
				<div className={`${classes.drop} ${isGenderOpen && classes.show}`}>
					<FilterSelector
						arr={["man", "woman", "unisex"]}
						dataArr={params.gender}
						close={() => handleGendereChange(false)}
						name="gender"
					/>
				</div>
				<button
					disabled={priceInputError}
					className={`${classes.applyButton} ${
						priceInputError && classes.disabled
					}`}
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default Filter;
