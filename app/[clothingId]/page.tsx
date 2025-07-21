import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import { fetchClothingData } from "@/lib/actions";
import classes from "./page.module.css";

const Page: React.FC<{ params: { clothingId: string } }> = async ({
	params,
}) => {
	const { clothingId } = await params;
	const data = await fetchClothingData(clothingId);
	return (
		<div className={classes.container}>
			<main className={classes.main}>
				<ImageCarousel />

				<div className={classes.info}>
					<h1 className={classes.header}>{data.name.toUpperCase()}</h1>
					<div className={classes.priceContainer}>
						<p className={classes.price}>${data.price}</p>
						{data.negotiablePrice && (
							<p className={classes.negotiablePrice}>Negotiable price</p>
						)}
					</div>

					<h2>Description</h2>
					<p>{data.description}</p>
					<p>Condition: {data.condition}</p>
					<p>Size: {data.size}</p>
					<p>Gender: {data.gender}</p>
				</div>
			</main>
		</div>
	);
};
export default Page;
