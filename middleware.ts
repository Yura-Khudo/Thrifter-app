import { deleteSession, verifyUser } from "./lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const user = await verifyUser();

	if (path.startsWith("/logout")) {
		await deleteSession();
		return NextResponse.redirect(new URL("/", req.url));
	}

	if (
		(path.startsWith("/myaccount") && !user) ||
		(path.startsWith("/sell") && !user)
	) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!_next|api|favicon.ico).*)"],
};
