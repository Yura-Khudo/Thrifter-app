import Link from "next/link";
import classes from "./MainHeader.module.css";

const MainHeader: React.FC = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.container}>
				<div className={classes.logoContainer}>
					<Link href="/" className={classes.logo}>
						THRIFTER
					</Link>
				</div>
				<div className={classes.utilityContainer}>
					<div className={classes.profileContainer}>
						<svg
							className={classes.userIcon}
							version="1.1"
							id="Capa_1"
							viewBox="-6.07 -6.07 72.81 72.81"
							fill="#000000"
							stroke="#000000"
							strokeWidth="0.0006067100000000001"
						>
							<g id="SVGRepo_iconCarrier">
								<g>
									<g>
										<ellipse
											cx="30.336"
											cy="12.097"
											rx="11.997"
											ry="12.097"
										></ellipse>
										<path d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z"></path>
									</g>
								</g>
							</g>
						</svg>
						<p>Your profile</p>
						<p className={classes.arrow}></p>
					</div>
					<div className={classes.sellContainer}>
						<Link className={classes.sellLink} href="/sell">
							Sell clothes
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default MainHeader;
