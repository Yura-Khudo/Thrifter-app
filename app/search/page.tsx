import { findClothes } from "@/lib/actions";
import classes from "./page.module.css";
import Filter from "@/components/Filter/Filter";

const Page: React.FC<{
	searchParams: { [key: string]: string | string[] | undefined };
}> = async ({ searchParams }) => {
	const params = await searchParams;
	const clothes = await findClothes(params);
	// console.log(clothes);
	return (
		<div
			style={{
				maxWidth: "1330px",
				margin: "0.5rem auto 0",
				overflow: "hidden",
				display: "grid",
				flex: 1,
				gap: "8px",
				gridTemplateColumns: "6fr 1.5fr",
			}}
		>
			<div
				style={{
					background: "var(--primary-color)",
					padding: "1rem",
					borderRadius: "8px",
				}}
			>
				{clothes && clothes.map((el) => <p key={el._id}>{el.name}</p>)}
			</div>
			<Filter />
		</div>
	);
};

export default Page;
