import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { Types } from "mongoose";

const secret = new TextEncoder().encode(process.env.SECRET);

export async function encrypt(payload: { userId: string; expires: Date }) {
	const jwt = await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("1h")
		.sign(secret);
	return jwt;
}

export async function decrypt(session: string) {
	try {
		const { payload } = await jwtVerify(session, secret, {
			algorithms: ["HS256"],
		});
		return payload;
	} catch (error) {
		return null;
	}
}

export async function createSession(userId: string) {
	const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
	const session = await encrypt({ userId, expires });

	(await cookies()).set("session", session, {
		httpOnly: true,
		secure: true,
		sameSite: "lax",
		path: "/",
		expires,
	});
}

export async function verifyUser() {
	const cookie = (await cookies()).get("session")?.value;
	if (!cookie) {
		return null;
	}
	const data = await decrypt(cookie);
	if (!data?.userId || typeof data.userId !== "string") {
		return null;
	}
	return { userId: data.userId };
}

export async function deleteSession() {
	(await cookies()).delete("session");
}
