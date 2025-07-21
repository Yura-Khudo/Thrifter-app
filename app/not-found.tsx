import classes from "./notFound.module.css";

const NotFound: React.FC = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.heading}>404</h1>
			<h2 className={classes.heading}>Page Not Found</h2>
			<p className={classes.description}>
				The page or listing that you are looking for does not exist or has been
				deleted.
			</p>
		</div>
	);
};

export default NotFound;
