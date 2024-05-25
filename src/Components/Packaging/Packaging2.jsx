import React, { useEffect, useRef } from "react"
import "./packaging2.css"
import { motion, useTransform, useScroll } from "framer-motion"

import { assets, packagingImages } from "../../assets/asset"

const Packaging2 = () => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
	})

	const x = useTransform(scrollYProgress, [0.7, 1], ["0%", "-125%"])
	const xx = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
	const xxx = useTransform(scrollYProgress, [0.8, 1], ["5%", "-75%"])
	const transition = {
		type: "spring",
		stiffness: 50, // Adjust the stiffness to make the animation smoother
		damping: 20, // Adjust the damping to control the overshooting
		duration: 2, // You can set a duration if needed
	}
	return (
		<div className="packaging2">
			<div className="packaging2-header">
				<div>
					<img
						className="package-bg1"
						src={assets.packaging}
						alt=""
					/>
					<p>
						At C9 Ads, located in the heart of Perth, we specialise in digital
						packaging design as we are the trusted product packaging designing
						company in Australia that tells your product's unique story.
						Understanding that packaging is often the first interaction a
						consumer has with your product, we focus on creating designs that
						are not only visually compelling but also strategically aligned with
						your brand’s ethos and market objectives <br /> <br /> <br />
						Why Effective Packaging Design is Crucial. Your packaging is more
						than just a container; it’s a communication tool. Effective
						packaging design:
					</p>
					<img
						className="package-bg2"
						src={assets.packaging_bg1}
						alt=""
					/>
				</div>
				<video
					id="myVideo"
					width="600"
					autoPlay
					muted
					loop
					// controls
				>
					<source
						src={assets.packaging_v1}
						type="video/mp4"
					/>
				</video>
			</div>
			<div
				className="packaging2-container"
				ref={targetRef}
			>
				<img
					className="package-bg3"
					src={assets.packaging_bg2}
					alt=""
				/>
				<div className="package2-CaptureAttention">
					<div className="package2-CaptureAttention-left">
						<video
							id="myVideo1"
							// width="200"
							autoPlay
							muted
							loop
							// controls
						>
							<source
								src={assets.packaging_v2}
								type="video/mp4"
							/>
						</video>
					</div>
					<div className="package2-CaptureAttention-right">
						<h2>Captures Attention</h2>
						<div className="package2-CaptureAttention-rightDown">
							<p>Makes your product stand out in a crowded marketplace.</p>
							<video
								id="myVideo2"
								// width="600"
								autoPlay
								muted
								loop
								// controls
							>
								<source
									src={assets.packaging_v3}
									type="video/mp4"
								/>
							</video>
						</div>
					</div>
				</div>
				<div className="package2-subContainer1">
					<div className="package2-subContainer1-content1">
						<span>Influences Purchasing Decisions</span>
						<p>
							Encourages consumers to choose your product <br /> over
							competitors.
						</p>
					</div>
					{/* <img
						src={assets.packag_img1}
						alt=""
					/> */}
					<video
						id="myVideo4"
						autoPlay
						muted
						loop
						// controls
					>
						<source
							src={assets.packaging_v5}
							type="video/mp4"
						/>
					</video>
					<div className="package2-subContainer1-content2">
						<span>Communicates Brand Values</span>
						<p>
							Conveys your brand’s story and values <br /> at a glance.
						</p>
					</div>
				</div>
				<div className="package2-subContainer2">
					<div className="package2-subContainer2-left">
						<h2>Research and Development (R&D)</h2>
						<p>
							Market Analysis: We start by analysing market trends, consumer
							behaviour, and competitive landscapes to ensure your packaging
							design is both relevant and innovative.
							<br />
							<br />
							Brand Alignment: Our designs begin with a deep dive into your
							brand’s values, target audience, and product features. This
							ensures the packaging design truly represents your brand and
							appeals to your specific market.
						</p>
					</div>
					<video
						id="myVideo5"
						// width="200"
						autoPlay
						muted
						loop
						// controls
					>
						<source3
							src={assets.packaging_v4}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="package2-subContainer3">
					<img
						src={assets.packag_img2}
						alt=""
					/>
					<div>
						<span>Our Design Principles and Process</span>
						<p>
							At C9 Ads, we adhere to a rigorous design process, guided by
							fundamental design principles including clarity, simplicity,
							honesty, and sustainability. Our process ensures that each
							packaging design is not only aesthetically pleasing but also
							effective in achieving your business goals.
						</p>
					</div>
					<img
						src={assets.packag_img3}
						alt=""
					/>
				</div>
				<div className="package2-subContainer4">
					<motion.div
						className="image-container"
						style={{ x }}
					>
						{packagingImages.map((items, index) => (
							<div className="package-imageContainer">
								<img
									key={index}
									src={items.img}
									alt=""
								/>
							</div>
						))}
					</motion.div>
					<motion.div
						className="image-container image-container2"
						style={{ x: xx }}
					>
						{packagingImages.map((items, index) => (
							<div className="package-imageContainer">
								<img
									key={index}
									src={items.img}
									alt=""
								/>
							</div>
						))}
					</motion.div>
					<motion.div
						className="image-container"
						style={{ x: xxx }}
					>
						{packagingImages.map((items, index) => (
							<div className="package-imageContainer">
								<img
									key={index}
									src={items.img}
									alt=""
								/>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Packaging2
