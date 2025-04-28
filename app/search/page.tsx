import classes from "./page.module.css";

const Page: React.FC<{ searchParams: any }> = async ({ searchParams }) => {
	const params = await searchParams;
	console.log(params);
	return <div>Search page</div>;
};

export default Page;
