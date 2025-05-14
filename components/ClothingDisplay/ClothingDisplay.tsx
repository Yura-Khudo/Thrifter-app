import { ClothingInt } from "@/models/Clothing";
import classes from "./ClothingDisplay.module.css";
import ClothingCard from "../ClothingCard/ClothingCard";

const ClothingDisplay: React.FC<{ fetchedClothes?: ClothingInt[] }> = ({
	fetchedClothes,
}) => {
	return (
		<div className={classes.main}>
			{fetchedClothes &&
				fetchedClothes.map((el) => <ClothingCard key={el.id} clothing={el} />)}
		</div>
	);
};

export default ClothingDisplay;
