"use client";

import { FormEvent, useActionState, useState, useEffect, useRef } from "react";

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

	///// Hide input if clicked outside of the form

	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (formRef.current && !formRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	/////

	return (
		<form ref={formRef} action={action} className={classes.form}>
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
