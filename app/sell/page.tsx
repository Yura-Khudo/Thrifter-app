"use client";

import { sellClothing } from "@/lib/actions";
import { useActionState } from "react";

const Page: React.FC = () => {
	const [state, action] = useActionState(sellClothing, null);

	return (
		<form action={action}>
			<h1>Sell your clothes</h1>

			<div>
				<label htmlFor="type">Type</label>
				<input type="text" name="type" id="type" />
			</div>

			<div>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" />
			</div>

			<div>
				<label htmlFor="color">Color</label>
				<input type="text" name="color" id="color" />
			</div>
			<div>
				<label htmlFor="price">Price</label>
				<input type="text" name="price" id="price" />
			</div>
			<div>
				<label htmlFor="color">Color</label>
				<input type="text" name="color" id="color" />
			</div>
			<div>
				<label htmlFor="color">Color</label>
				<input type="text" name="color" id="color" />
			</div>
		</form>
	);
};

export default Page;
