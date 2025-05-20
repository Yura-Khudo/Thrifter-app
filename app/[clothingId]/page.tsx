import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import { fetchClothingData } from "@/lib/actions";

const Page: React.FC<{ params: { clothingId: string } }> = async ({
	params,
}) => {
	const { clothingId } = await params;
	const data = await fetchClothingData(clothingId);
	console.log(data);
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
						background: "var(--darkgrey-color)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					Image info
				</div>
			</main>
		</div>
	);
};
export default Page;
