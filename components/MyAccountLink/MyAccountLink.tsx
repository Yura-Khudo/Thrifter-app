"use client";
import { usePathname } from "next/navigation";
import classes from "./MyAccountLink.module.css";
import Link from "next/link";

const MyAccountLink: React.FC<{ name: string; path: string }> = ({
	name,
	path,
}) => {
	const pathName = usePathname();

	return (
		<Link
			className={`${classes.link} ${pathName === path && classes.activeLink}`}
			href={path}
		>
			{name}
		</Link>
	);
};

export default MyAccountLink;
