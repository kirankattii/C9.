import React, { useState } from "react"
import FancyCarousel from "react-fancy-circular-carousel"
import "react-fancy-circular-carousel/FancyCarousel.css"
import "./circularSlide.css"

import image1 from "../../assets/smalring.png"
import image2 from "../../assets/smalring.png"
import image3 from "../../assets/smalring.png"
import image4 from "../../assets/smalring.png"

const CircularSlide = () => {
	const [focusElement, setFocusElement] = useState(0)
	const [focuscontent, setFocusContent] = useState(0)
	const images = [image2, image3, image4]
	// const info = [
	// 	{
	// 		title: "Why Choose C9 Ads?",
	// 		content: "Choosing C9 Ads means partnering with an agency that:",
	// 	},
	// 	{
	// 		title: "Why Choose C9 Ads?",
	// 		content: "Choosing C9 Ads means partnering with an agency that:",
	// 	},
	// 	{
	// 		title: "Why Choose C9 Ads?",
	// 		content: "Choosing C9 Ads means partnering with an agency that:",
	// 	},
	// ]
	const info = ["Why Choose C9 Ads?", "Why Choose C9 ?", "Why  C9 Ads?"]
	const content = [
		"Choosing C9 Ads means partnering with an agency that:",
		"Choosing C9 Ads means partnering with an agency that:",
		"Choosing C9 Ads means partnering with an agency that:",
	]
	return (
		<div className="fancyCarousel">
			<FancyCarousel
				images={images}
				autoRotateTime={3}
				borderHexColor={"ffffff"}
				setFocusElement={setFocusElement}
				carouselRadius={0}
				peripheralImageRadius={20}
				centralImageRadius={0}
				focusElementStyling={{ border: "2px solid #ba4949" }}
				borderWidth={4}
			/>
			<div className="info-box-wrapper">
				<p> {info[focusElement]} </p>
				<p> {content[setFocusContent]} </p>
			</div>
		</div>
	)
}

export default CircularSlide
