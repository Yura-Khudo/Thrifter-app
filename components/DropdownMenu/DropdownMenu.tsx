import { firstLetterUppercase } from "@/utils/utils";
import { useState, useRef, useEffect } from "react";
import classes from "./DropdownMenu.module.css";

const DropdownMenu: React.FC<{
	arr: string[];
	name: string;
	handleTypeChange?: (value: string) => void;
	defaultValue: string;
}> = ({ arr, name, handleTypeChange, defaultValue }) => {
	const [value, setValue] = useState(defaultValue || "Choose your value");
	const [state, setState] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	function selectNewValue(value: string) {
		setState(false);
		setValue(value);
		handleTypeChange?.(value);
	}

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
	useEffect(() => setValue(defaultValue), [defaultValue]);
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
					arr.length === 0 && classes.disabled
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
