"use client";

import { useState } from "react";
import classes from "./AuthInput.module.css";

const AuthInput: React.FC<{
	type?: string;
	name: string;
	strictName: string;
	defaultValue?: string;
}> = ({ type = "text", name, strictName, defaultValue }) => {
	const [inputType, setInputType] = useState(type);

	function changeType() {
		setInputType((prevState) => (prevState === "text" ? "password" : "text"));
	}

	return (
		<div className={classes.container}>
			<label className={classes.label} htmlFor={name}>
				{strictName}
			</label>
			<input
				className={classes.input}
				type={inputType}
				name={name}
				id={name}
				placeholder={strictName}
				defaultValue={defaultValue}
			/>
			{type === "password" && (
				<span style={{ position: "absolute", right: "0.5rem", top: "37px" }}>
					<svg
						onClick={changeType}
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
						<circle cx="12" cy="12" r="3" />
						{inputType === "password" && <line x1="1" y1="1" x2="23" y2="23" />}
					</svg>
				</span>
			)}
		</div>
	);
};

export default AuthInput;
