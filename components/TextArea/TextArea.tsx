import { firstLetterUppercase } from "@/utils/utils";
import classes from "./TextArea.module.css";
import { RefObject } from "react";

const TextArea: React.FC<{
	name: string;
	defaultValue?: string;
	descriptionRef: RefObject<HTMLTextAreaElement | null>;
	setCount: () => void;
}> = ({ name, defaultValue, descriptionRef, setCount }) => {
	return (
		<div className={classes.container}>
			<label className={classes.label} htmlFor={name}>
				{firstLetterUppercase(name)}
			</label>
			<textarea
				onChange={setCount}
				ref={descriptionRef}
				className={classes.textArea}
				name={name}
				id={name}
				defaultValue={defaultValue}
			></textarea>
		</div>
	);
};
export default TextArea;
