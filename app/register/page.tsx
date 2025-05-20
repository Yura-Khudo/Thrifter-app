import AuthInput from "@/components/AuthInput/AuthInput";
import classes from "./page.module.css";
import Link from "next/link";

const Page: React.FC = () => {
	return (
		<main className={classes.main}>
			<form className={classes.form} action="">
				<h1 className={classes.header}>CREATE ACCOUNT</h1>
				<AuthInput name="firstName" strictName="First Name" />
				<AuthInput name="lastName" strictName="Last Name" />
				<AuthInput name="email" strictName="Email" type="email" />
				<AuthInput name="password" strictName="Password" type="password" />
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
