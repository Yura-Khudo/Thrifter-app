import { firstLetterUppercase } from "@/utils/utils";
import classes from "./Input.module.css";
import { RefObject, useRef } from "react";

const Input: React.FC<{
	name: string;
	defaultValue?: string;
	nameRef?: RefObject<HTMLInputElement | null>;
	setCount?: () => void;
}> = ({ name, defaultValue, nameRef, setCount }) => {
	return (
		<div className={classes.container}>
			<label className={classes.label} htmlFor={name}>
				{firstLetterUppercase(name)}
			</label>
			<div className={classes.inputContainer}>
				{name === "price" && <span className={classes.span}>$</span>}
				<input
					onChange={setCount}
					ref={nameRef}
					className={`${classes.input}  ${
						name === "price" && classes.inputPrice
					}`}
					defaultValue={defaultValue}
					id={name}
					name={name}
				/>
			</div>
		</div>
	);
};

export default Input;
