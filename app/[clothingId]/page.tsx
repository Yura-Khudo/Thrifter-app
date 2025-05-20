import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import { fetchClothingData } from "@/lib/actions";

const Page: React.FC<{ params: { clothingId: string } }> = async ({
	params,
}) => {
	const { clothingId } = await params;
	const data = await fetchClothingData(clothingId);
	// console.log(data);
	return (
		<div style={{ margin: "0 auto", maxWidth: "1330px", width: "100%" }}>
			<main
				style={{
					margin: "1rem",
					display: "grid",
					gap: "1rem",
					gridTemplateColumns: "1fr 1fr",
				}}
			>
				<ImageCarousel />

				<div
					style={{
						background: "white",
						borderRadius: "8px",
						display: "flex",
						flexDirection: "column",
						padding: "1rem",
					}}
				>
					<h1 style={{ letterSpacing: "4px" }}>{data.name.toUpperCase()}</h1>
					<div style={{ display: "flex", alignItems: "center" }}>
						<p style={{ fontWeight: "bolder", fontSize: "1.125rem" }}>
							${data.price}
						</p>
						{data.negotiablePrice && (
							<p
								style={{
									display: "inline-block",
									padding: "0.25rem",
									border: "2px solid var(--darkgrey-color)",
									borderRadius: "8px",
									marginLeft: "1rem",
								}}
							>
								Negotiable price
							</p>
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
