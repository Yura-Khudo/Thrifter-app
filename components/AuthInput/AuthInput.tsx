"use client";

import { useState } from "react";
import classes from "./AuthInput.module.css";

const AuthInput: React.FC<{
	type?: string;
	name: string;
	strictName: string;
}> = ({ type = "text", name, strictName }) => {
	const [showPassword, setShowPassword] = useState(true);

	return (
		<div className={classes.container}>
			<label className={classes.label} htmlFor={name}>
				{strictName}
			</label>
			<input
				className={classes.input}
				type={showPassword ? "password" : "text"}
				name={name}
				id={name}
				placeholder={strictName}
			/>
			{type === "password" && (
				<span style={{ position: "absolute", right: "0.5rem", top: "37px" }}>
					<svg
						onClick={() => setShowPassword((prevState) => !prevState)}
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
						{showPassword && <line x1="1" y1="1" x2="23" y2="23" />}
					</svg>
				</span>
			)}
		</div>
	);
};

export default AuthInput;
