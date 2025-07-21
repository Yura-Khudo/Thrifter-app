import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarToggler from "@/components/NavbarToggler/NavbarToggler";
import { currUser } from "@/lib/actions";
import classes from "./page.module.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Thrifter",
	description: "Shop where you can create your own style",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const user = await currUser();

	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<div className={classes.body}>
					<NavbarToggler user={user} />

					{children}
				</div>
			</body>
		</html>
	);
}
