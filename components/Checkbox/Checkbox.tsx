import { firstLetterUppercase } from "@/utils/utils";
import classes from "./Checkbox.module.css";
import { useState } from "react";

const Checkbox: React.FC<{
	name: string;
	strictName?: string;
	isChecked?: boolean;
	defaultValue?: string;
}> = ({ name, strictName, isChecked = false, defaultValue }) => {
	const [checked, setChecked] = useState(isChecked);
	return (
		<div className={classes.container}>
			<label htmlFor={name}>{firstLetterUppercase(strictName || name)}</label>
			<input
				className={classes.input}
				type="checkbox"
				defaultValue={defaultValue}
				defaultChecked={checked}
				id={name}
				name={name}
			/>
			<span
				onClick={() => setChecked((prevState) => !prevState)}
				className={`${classes.relativeSpan} ${
					checked ? classes.relativeSpanChecked : classes.relativeSpanNotChecked
				}`}
			>
				<span
					className={`${classes.childSpan} ${
						checked ? classes.childSpanChecked : classes.childSpanNotChecked
					}`}
				></span>
			</span>
		</div>
	);
};

export default Checkbox;
