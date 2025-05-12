"use client";

import { FormEvent, useActionState, useState } from "react";

import classes from "./NavbarSearchInput.module.css";
import { filter } from "@/lib/actions";
const NavbarSearchInput: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick(e: FormEvent) {
		if (!isOpen) {
			e.preventDefault();
		}
		setIsOpen(!isOpen);
	}

	const [state, action] = useActionState(filter, null);

	return (
		<form action={action} className={classes.form}>
			<div className={classes.container}>
				<input
					className={`${classes.input} ${isOpen && classes.inputShow}`}
					type="text"
					name="name"
				/>
				<button
					onClick={handleClick}
					className={`${classes.searchIcon} ${
						isOpen && classes.searchIconShow
					} `}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						stroke={isOpen ? "black" : "white"}
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="11" cy="11" r="8" />
						<line x1="21" y1="21" x2="16.65" y2="16.65" />
					</svg>
				</button>
			</div>
		</form>
	);
};

export default NavbarSearchInput;
