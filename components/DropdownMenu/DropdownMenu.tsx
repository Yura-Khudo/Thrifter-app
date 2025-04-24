import { firstLetterUppercase } from "@/utils/utils";
import { useState, useRef, useEffect } from "react";
import classes from "./DropdownMenu.module.css";

const DropdownMenu: React.FC<{
	arr: string[];
	name: string;
	handleChange?: (value: string) => void;
	defaultValue: string;
}> = ({ arr, name, handleChange, defaultValue }) => {
	const [value, setValue] = useState(defaultValue || "Choose your value");
	const [state, setState] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	function selectNewValue(value: string) {
		setState(false);
		setValue(value);
		// DropdownMenu dynamic change//
		handleChange?.(value);
		////
	}

	// Hide dropdownMenu after clicking outside of menu //

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setState(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	////
	// DropdownMenu dynamic change
	useEffect(() => setValue(defaultValue), [defaultValue]);
	////
	return (
		<div ref={dropdownRef} className={classes.container}>
			<label className={classes.label} htmlFor={name}>
				{firstLetterUppercase(name)}
			</label>
			<input
				className={classes.input}
				type="text"
				name={name}
				defaultValue={value}
			/>
			<div
				className={`${classes.dropdownMenuContainer} ${
					name !== "type" && arr.length === 0 && classes.disabled
				}`}
			>
				<p
					className={classes.dropdownMenuValue}
					onClick={() => setState((prevState) => !prevState)}
				>
					{firstLetterUppercase(value)}
				</p>
				{arr.length > 0 && (
					<div className={`${classes.menu} ${state && classes.menuOpen}  `}>
						{arr.map((el, i) => (
							<p
								className={classes.option}
								onClick={() => selectNewValue(el)}
								key={i}
							>
								{firstLetterUppercase(el)}
							</p>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default DropdownMenu;
