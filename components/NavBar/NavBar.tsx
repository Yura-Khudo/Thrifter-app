"use client";

import classes from "./Navbar.module.css";
import { clothingCategories } from "@/utils/arrUtils";
import DropdownLink from "../DropdownLink/DropdownLink";
import { useState } from "react";
import DropdownLinkMenu from "../DropdownLinkMenu/DropdownLinkMenu";

const Navbar: React.FC = () => {
	const [content, setContent] = useState({
		arr: clothingCategories.men,
		isOpen: false,
		gender: "men",
	});

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
					<DropdownLinkMenu content={content} />
				</div>
				<DropdownLink
					setContent={setContent}
					content={content}
					arr={clothingCategories.men}
					link="men"
					title="FOR MEN"
				/>
				<DropdownLink
					setContent={setContent}
					content={content}
					arr={clothingCategories.women}
					link="women"
					title="FOR WOMEN"
				/>
				<DropdownLink
					setContent={setContent}
					content={content}
					arr={clothingCategories.unisex}
					link="unisex"
					title="UNISEX"
				/>
			</div>
		</div>
	);
};

export default Navbar;
