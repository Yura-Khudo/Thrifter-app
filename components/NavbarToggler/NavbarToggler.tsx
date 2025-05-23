"use client";

import { usePathname } from "next/navigation";
import MainHeader from "../MainHeader/MainHeader";
import Navbar from "../Navbar/Navbar";

const NavbarToggler: React.FC = () => {
	const pathname = usePathname();

	if (pathname === "/login" || pathname === "/register") {
		return;
	}
	return (
		<>
			<MainHeader />
			<Navbar />
		</>
	);
};

export default NavbarToggler;
