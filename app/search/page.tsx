const Page: React.FC<{ searchParams: any }> = async ({ searchParams }) => {
	const params = await searchParams;

	return <div>Search page</div>;
};

export default Page;
