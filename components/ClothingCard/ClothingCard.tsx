import { ClothingInt } from "@/models/Clothing";
import Link from "next/link";
import ImageCard from "../ImageCard/ImageCard";
import { wordsReducer } from "@/utils/utils";
import classes from "./ClothingCard.module.css";

const ClothingCard: React.FC<{ clothing: ClothingInt }> = ({ clothing }) => {
	return (
		<Link href={`/${clothing._id}`} className={classes.link}>
			<div>
				<div className={classes.imageWrapper}>
					<ImageCard />
				</div>
				<p className={classes.name}>
					{wordsReducer(clothing.name.toUpperCase())}
				</p>
			</div>
			<p>${clothing.price}</p>
		</Link>
	);
};

export default ClothingCard;
