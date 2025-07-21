import { firstLetterUppercase } from "@/utils/utils";
import classes from "./Checkbox.module.css";
import { useState } from "react";

const Checkbox: React.FC<{
	name: string;
	strictName?: string;
	isChecked?: boolean;
}> = ({ name, strictName, isChecked = false }) => {
	const [checked, setChecked] = useState(isChecked);
	return (
		<div className={classes.container}>
			<label className={classes.label} htmlFor={name}>
				{firstLetterUppercase(strictName || name)}
			</label>
			<input
				key={name}
				className={classes.input}
				type="checkbox"
				checked={checked}
				id={name}
				name={name}
				onChange={(e) => setChecked(e.target.checked)}
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
