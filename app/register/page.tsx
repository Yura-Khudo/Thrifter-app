"use client";

import AuthInput from "@/components/AuthInput/AuthInput";
import classes from "./page.module.css";
import Link from "next/link";
import { useActionState } from "react";
import { registerUser } from "@/lib/actions";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

const Page: React.FC = () => {
	const [state, action] = useActionState(registerUser, null);
	console.log(state);
	return (
		<main className={classes.main}>
			<form className={classes.form} action={action}>
				<h1 className={classes.header}>CREATE ACCOUNT</h1>
				<AuthInput
					name="firstName"
					strictName="First Name"
					defaultValue={state?.data.firstName}
				/>
				{state?.error.firstName && (
					<ErrorMessage message={state?.error.firstName} />
				)}
				<AuthInput
					name="lastName"
					strictName="Last Name"
					defaultValue={state?.data.lastName}
				/>
				{state?.error.lastName && (
					<ErrorMessage message={state?.error.lastName} />
				)}
				<AuthInput
					name="email"
					strictName="Email"
					type="email"
					defaultValue={state?.data.email}
				/>
				{state?.error.email && <ErrorMessage message={state?.error.email} />}
				{state?.user && <ErrorMessage message={state?.user} />}
				<AuthInput
					name="password"
					strictName="Password"
					type="password"
					defaultValue={state?.data.password}
				/>
				{state?.error.password && (
					<ErrorMessage message={state?.error.password} />
				)}

				<button className={classes.button}>Create Account</button>
				<div className={classes.linkWrapper}>
					<Link className={classes.link} href="/login">
						Already have an account?
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
