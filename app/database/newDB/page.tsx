"use client";

import { updateDB } from "@/lib/actions";
import { useActionState } from "react";

const Page: React.FC = () => {
	const [state, action] = useActionState(updateDB, null);

	return (
		<form action={action}>
			<button>
				<h1>Update DB</h1>
			</button>
		</form>
	);
};

export default Page;
