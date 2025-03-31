"use client";
import { createProduct } from "@/lib/actions";
import { useActionState } from "react";

export default function Home() {
	const [state, action] = useActionState(createProduct, null);

	return (
		<div>
			<form action={action}>
				<input type="text" name="title" />
				<button>Create</button>
			</form>
		</div>
	);
}
