"use client";

import classes from "./Navbar.module.css";
import { sizeOfPants, sizeOfShoes, typesOfClothes } from "@/utils/arrUtils";
import DropdownLink from "../DropdownLink/DropdownLink";
import { useState } from "react";

const Navbar: React.FC = () => {
	const [content, setContent] = useState({ arr: sizeOfPants, isOpen: false });
	// const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={classes.navContainer}>
			<div className={classes.nav}>
				<div
					onMouseLeave={() =>
						setContent((prevState) => {
							return { ...prevState, isOpen: false };
						})
					}
					onMouseOver={() =>
						setContent((prevState) => {
							return { ...prevState, isOpen: true };
						})
					}
					className={`${classes.menu} ${content.isOpen && classes.open}`}
				>
					{content.arr.map((el) => (
						<p key={el}>{el}</p>
					))}
				</div>
				<DropdownLink
					setContent={setContent}
					content={content}
					arr={sizeOfShoes}
					link="men"
					title="FOR MEN"
				/>
				<DropdownLink
					setContent={setContent}
					content={content}
					arr={sizeOfPants}
					link="women"
					title="FOR WOMEN"
				/>
				<DropdownLink
					setContent={setContent}
					content={content}
					arr={typesOfClothes}
					link="unisex"
					title="UNISEX"
				/>
				{/* <div
						onMouseLeave={close}
						onMouseOver={() => openMenu(typesOfClothes)}
						className={`${classes.dropdownLink} `}
					>
						<Link className={classes.link} href="/man">
							UNISEX
							<p className={classes.arrow}></p>
						</Link>
					</div> */}
			</div>
		</div>
	);
};

export default Navbar;
