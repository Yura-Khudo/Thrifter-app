import Link from "next/link";
import classes from "./Navbar.module.css";
import { sizeOfPants, sizeOfShoes, typesOfClothes } from "@/utils/arrUtils";

const Navbar: React.FC = () => {
	return (
		<div className={classes.main}>
			<div className={classes.navContainer}>
				<div className={classes.nav}>
					<div className={`${classes.dropdownLink} `}>
						<Link className={classes.link} href="/man">
							For Men
							<p className={classes.arrow}></p>
						</Link>
						<div className={classes.menu}>
							{typesOfClothes.map((el) => (
								<p key={el}>{el}</p>
							))}
						</div>
					</div>
					<div className={`${classes.dropdownLink} `}>
						<Link className={classes.link} href="/man">
							For Woman
							<p className={classes.arrow}></p>
						</Link>
						<div className={classes.menu}>
							{sizeOfPants.map((el) => (
								<p key={el}>{el}</p>
							))}
						</div>
					</div>
					<div className={`${classes.dropdownLink} `}>
						<Link className={classes.link} href="/man">
							UNISEX
							<p className={classes.arrow}></p>
						</Link>
						<div className={classes.menu}>
							{sizeOfShoes.map((el) => (
								<p key={el}>{el}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
