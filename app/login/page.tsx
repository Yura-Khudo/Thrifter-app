"use client";

import AuthInput from "@/components/AuthInput/AuthInput";
import classes from "./page.module.css";
import Link from "next/link";
import { useActionState } from "react";
import { loginUser } from "@/lib/actions";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

const Page: React.FC = () => {
	const [state, action] = useActionState(loginUser, null);

	return (
		<main className={classes.main}>
			<form className={classes.form} action={action}>
				<h1 className={classes.header}>LOG IN</h1>
				<AuthInput
					name="email"
					strictName="Email"
					type="email"
					defaultValue={state?.data.email}
				/>
				<AuthInput name="password" strictName="Password" type="password" />
				{state?.error && <ErrorMessage message={state.error} />}
				<button className={classes.button}>Log in</button>
				<div className={classes.linkWrapper}>
					<Link className={classes.link} href="/register">
						New user?
					</Link>
					<Link className={classes.link} href="/">
						Return to main page
					</Link>
				</div>
			</form>
		</main>
	);
};

export default Page;
