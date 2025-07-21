"use client";

import Image from "next/image";
import classes from "./ImageCarousel.module.css";
import { useState } from "react";

const imagesArr = [
	"/images/pants.jpg",
	"/images/testImg1.avif",
	"/images/testImg2.webp",
];

const ImageCarousel: React.FC<{ images?: string[] }> = ({ images }) => {
	const [index, setIndex] = useState(0);

	function nextSlide() {
		setIndex((prev) => (prev + 1) % imagesArr.length);
	}

	function prevSlide() {
		setIndex((prev) => (prev - 1 + imagesArr.length) % imagesArr.length);
	}

	function selectSlide(index: number) {
		setIndex(index);
	}

	return (
		<div className={classes.carouselContainer}>
			<div className={classes.carousel}>
				<div
					className={classes.slider}
					style={{ transform: `translateX(-${index * 100}%)` }}
				>
					{imagesArr.map((img, i) => (
						<div className={classes.slide} key={i}>
							<Image
								src={img}
								alt={`Slide ${i}`}
								fill
								className={classes.image}
							/>
						</div>
					))}
				</div>

				<button className={classes.prev} onClick={prevSlide}>
					‹
				</button>
				<button className={classes.next} onClick={nextSlide}>
					›
				</button>
			</div>
			<div className={classes.carouselThumbnails}>
				{imagesArr.map((img, i) => (
					<div
						key={i}
						className={`${classes.carouselThumbnail} ${
							index === i && classes.activeSlide
						}`}
					>
						<Image
							src={img}
							alt={`Slide ${i}`}
							width={100}
							height={100}
							onClick={() => selectSlide(i)}
							className={classes.pickImage}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageCarousel;
