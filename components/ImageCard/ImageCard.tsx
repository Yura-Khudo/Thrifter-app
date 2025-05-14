"use client";
import Image from "next/image";
import { useState } from "react";
import classes from "./ImageCard.module.css";

const ImageCard: React.FC<{ images?: string }> = ({ images }) => {
	const [image, setImage] = useState("/images/test.jpg");
	///// Need to update this when i will recieve photos from DB
	return (
		<Image
			onMouseOver={() => setImage("/images/pants.jpg")}
			onMouseLeave={() => setImage("/images/test.jpg")}
			src={image}
			alt="Pants"
			fill
			className={classes.image}
		/>
	);
};

export default ImageCard;
