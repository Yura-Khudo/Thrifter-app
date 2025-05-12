import classes from "./ErrorMessage.module.css";

const ErrorMessage: React.FC<{ message: string[] | string }> = ({
	message,
}) => {
	return <p className={classes.errorMessage}>*{message}</p>;
};
export default ErrorMessage;
