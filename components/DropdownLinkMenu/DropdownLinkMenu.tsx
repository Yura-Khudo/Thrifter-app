import classes from "./DropdownLinkMenu.module.css";
import Link from "next/link";
import { firstLetterUppercase } from "@/utils/utils";

const DropdownLinkMenu: React.FC<{
	content: { arr: string[]; isOpen: boolean; gender: string };
}> = ({ content }) => {
	return (
		<div className={classes.menuContainer}>
			{content.arr.map((el) => (
				<div className={classes.linkContainer} key={el}>
					<Link
						className={classes.link}
						href={`/search?gender=${content.gender}&type=${el}`}
					>
						{firstLetterUppercase(el)}
					</Link>
				</div>
			))}
		</div>
	);
};

export default DropdownLinkMenu;
