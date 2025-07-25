import classes from "./DropdownLink.module.css";
import Link from "next/link";

const DropdownLink: React.FC<{
	setContent: React.Dispatch<
		React.SetStateAction<{ arr: string[]; isOpen: boolean; gender: string }>
	>;
	content: { arr: string[]; isOpen: boolean; gender: string };
	arr: string[];
	link: string;
	title: string;
}> = ({ setContent, content, arr, link, title }) => {
	return (
		<div
			onMouseLeave={() =>
				setContent((prevState) => {
					return { ...prevState, isOpen: false, gender: link };
				})
			}
			onMouseOver={() => setContent({ arr, isOpen: true, gender: link })}
			className={`${classes.dropdownLink} `}
		>
			<Link
				className={`${classes.link} ${
					content.isOpen && content.arr === arr && classes.activeLink
				}`}
				href={`/search?gender=${link}`}
			>
				{title}
				<p
					className={`${classes.arrow} ${
						content.isOpen && content.arr === arr && classes.activeArrow
					}`}
				></p>
			</Link>
		</div>
	);
};
export default DropdownLink;
