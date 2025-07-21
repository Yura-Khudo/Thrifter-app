"use client";
import Image from "next/image";
import { useState } from "react";
import classes from "./ImageCard.module.css";

const ImageCard: React.FC<{ images?: string }> = ({ images }) => {
	const [image, setImage] = useState("/images/testImg1.avif");

	return (
		<Image
			onMouseOver={() => setImage("/images/testImg2.webp")}
			onMouseLeave={() => setImage("/images/testImg1.avif")}
			src={image}
			alt="Pants"
			fill
			className={classes.image}
		/>
	);
};

export default ImageCard;
