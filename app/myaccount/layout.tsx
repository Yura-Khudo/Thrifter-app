import MyAccountLink from "@/components/MyAccountLink/MyAccountLink";
import classes from "./layout.module.css";

const UserLayout: React.FC<{ children: React.ReactNode }> = async ({
	children,
}) => {
	return (
		<>
			<div className={classes.nav}>
				<div className={classes.linksWrapper}>
					<MyAccountLink name="My listing" path="/myaccount/listing" />
					<MyAccountLink name="Chats" path="/myaccount/chats" />
					<MyAccountLink name="Profile" path="/myaccount" />
					<MyAccountLink name="Settings" path="/myaccount/settings" />
				</div>
			</div>
			{children}
		</>
	);
};

export default UserLayout;
