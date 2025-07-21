import { getUserListings } from "@/lib/actions";
import Link from "next/link";

const Page: React.FC = async () => {
	const listings = await getUserListings();
	console.log(listings);

	return (
		<div>
			{listings &&
				listings.map((listing) => (
					<p key={listing._id.toString()}>
						<Link href={`/${listing._id}`}>{listing._id.toString()}</Link>
					</p>
				))}
		</div>
	);
};

export default Page;
