import { findClothes } from "@/lib/actions";
import classes from "./page.module.css";
import Filter from "@/components/Filter/Filter";
import ClothingDisplay from "@/components/ClothingDisplay/ClothingDisplay";

const Page: React.FC<{
	searchParams: { [key: string]: string | string[] | undefined };
}> = async ({ searchParams }) => {
	const params = await searchParams;
	const clothes = await findClothes(params);

	return (
		<div className={classes.main}>
			<ClothingDisplay fetchedClothes={clothes} />
			<Filter />
		</div>
	);
};

export default Page;
