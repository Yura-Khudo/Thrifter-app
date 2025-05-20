import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const headers = new Headers(req.headers);
	headers.set("current-path", req.nextUrl.pathname);
	return NextResponse.next({ headers });
}
