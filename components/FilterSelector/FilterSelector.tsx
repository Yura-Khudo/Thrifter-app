"use client";

import classes from "./FilterSelector.module.css";
import { firstLetterUppercase } from "@/utils/utils";

import { useState } from "react";

const FilterSelector: React.FC<{
	arr: string[];
	dataArr: string[];
	close: () => void;
	name: string;
}> = ({ arr, close, name, dataArr }) => {
	const [state, setState] = useState<string[]>(dataArr);

	function addValue(value: string) {
		const isInArr = state.find((el) => el === value);
		if (!isInArr) {
			setState((prevState) => [...prevState, value]);
		} else {
			setState((prevState) => prevState.filter((el) => el !== value));
		}
	}

	return (
		<div className={classes.filterSelector}>
			<div className={classes.categoryValuesContainer}>
				{arr.map((el) => (
					<div
						onClick={() => addValue(el)}
						key={el}
						className={`${classes.value} ${
							state.includes(el) && classes.chosen
						}`}
					>
						{firstLetterUppercase(el)}
						<input
							type="hidden"
							value={el}
							name={name}
							disabled={!state.includes(el)}
						/>
					</div>
				))}
			</div>
			<div className={classes.applyButton} onClick={close}>
				Apply
			</div>
		</div>
	);
};

export default FilterSelector;
