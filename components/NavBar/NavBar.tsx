import Link from "next/link";

const NavBar: React.FC = () => {
	return (
		<nav
			style={{
				display: "flex",
				justifyContent: "space-between",
				backgroundColor: "#faedcd",
			}}
		>
			<div>
				<p style={{ margin: "1rem", fontSize: "2rem", fontWeight: "bolder" }}>
					LOGO
				</p>
			</div>
			<div style={{ display: "flex", fontSize: "1.25rem" }}>
				<div
					style={{
						display: "flex",
						margin: "0 1rem",
						alignItems: "center",
					}}
				>
					<svg
						style={{ width: "24px" }}
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
					<p
						style={{
							borderLeft: "1px solid black",
							borderBottom: "1px solid black",
							width: "8px",
							height: "8px",
							transform: "rotate(135deg)",
							marginLeft: "8px",
						}}
					></p>
				</div>
				<div
					style={{
						margin: "0 1rem",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Link style={{ textDecoration: "none", color: "black" }} href="/sell">
						Sell clothes
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
