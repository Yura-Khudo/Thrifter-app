import classes from "./ErrorMessage.module.css";

const ErrorMessage: React.FC<{ message: string[] }> = ({ message }) => {
	return message.map((el) => (
		<p key={el} className={classes.errorMessage}>
			*{el}
		</p>
	));
};
export default ErrorMessage;
