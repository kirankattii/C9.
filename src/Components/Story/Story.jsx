import React, { useEffect, useRef } from "react"
import "./story.css"
import { assets } from "../../assets/asset"
import locomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"
import { ThemeProvider } from "styled-components"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
const Story = () => {
	const containerRef = useRef(null)
	const calculateScrollSpeed = () => {
		const screenWidth = window.innerWidth
		if (screenWidth >= 1300) {
			return 5 // Adjust this value based on your design needs
		} else if (screenWidth >= 1000) {
			return 4
		} else if (screenWidth >= 800) {
			return 3
		} else if (screenWidth >= 650) {
			return 2
		} else {
			return 0
		}
	}
	const calculateScrollSpeed2 = () => {
		const screenWidth = window.innerWidth
		if (screenWidth >= 650) {
			return 1
			// Adjust this value based on your design needs
			// } else if (screenWidth >= 1000) {
			// 	return 4
			// } else if (screenWidth >= 800) {
			// 	return 3
			// } else if (screenWidth >= 650) {
			// 	return 2
		} else {
			return 1
		}
	}
	return (
		<div
			className="story"
			// ref={scrollRef}
		>
			<Navbar />
			<LocomotiveScrollProvider
				options={{
					smooth: true,
					// ... all available Locomotive Scroll instance options
					smartphone: {
						smooth: true,
					},
					tablet: {
						smooth: true,
					},
				}}
				watch={
					[
						//..all the dependencies you want to watch to update the scroll.
						//  Basicaly, you would want to watch page/location changes
						//  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
					]
				}
				containerRef={containerRef}
			>
				<div
					className="story-container"
					data-scroll-container
					data-scroll-section
					ref={containerRef}
				>
					<div className="story-landing">
						<div className="story-landing-text">
							<h1 className="text-journeys">JOURNEYS</h1>
							<div className="story-landing-bottom-text">
								<div>
									<p className="text-boundless">Boundless Stories</p>
									<p className="text-endless">Endless Inspirations</p>
								</div>
								<h1 className="text-in">iN</h1>
								<h1 className="text-ink">INK</h1>
							</div>
						</div>
					</div>
					<div className="story-parallex-content">
						<div className="story-design1">
							<img
								data-scroll
								data-scroll-speed={calculateScrollSpeed()}
								// data-scroll-position="top"
								// data-scroll-direction="horizontal"
								src={assets.studioDesign1}
								alt="studioDesign"
							/>
							<p
								data-scroll
								data-scroll-speed={calculateScrollSpeed2()}
								// data-scroll-position="top"
								data-scroll-direction="horizontal"
							>
								Step into the vibrant world of C9, a design studio nestled in
								the heart of Australia, where we specialize in crafting
								captivating branding solutions tailored for businesses of all
								scales. Our array of design services spans from crafting iconic
								logos to designing alluring product packaging, aimed at
								propelling your brand to new heights.
							</p>
						</div>
						<div
							className="story-design2"

							// data-scroll-position="top"
						>
							<p
								data-scroll
								data-scroll-speed={calculateScrollSpeed2()}
								data-scroll-direction="top"
							>
								Embracing a collaborative ethos, our seasoned designers engage
								closely with clients to unravel their needs, aspirations, and
								brand essence. We recognize that impactful design transcends
								mere aesthetics; it hinges on a profound grasp of marketing
								dynamics and consumer psychology. Thus, we delve deep into
								researching your target demographics and competitive landscape,
								ensuring that our designs not only captivate but also
								strategically resonate.
							</p>{" "}
							<img
								src={assets.studioDesign2}
								alt="studioDesign"
								data-scroll
								data-scroll-speed={calculateScrollSpeed()}

								// data-scroll-position="top"
							/>
						</div>
						<div className="story-design3">
							<img
								src={assets.studioDesign3}
								alt="studioDesign"
								data-scroll
								data-scroll-speed={calculateScrollSpeed()}
							/>
							<p
								data-scroll
								data-scroll-speed={calculateScrollSpeed2()}
								data-scroll-direction="horizontal"
							>
								Logo design stands as a cornerstone service, where we appreciate
								the pivotal role of a memorable and cohesive logo in brand
								representation. Our team meticulously crafts logos that mirror
								your brand's ethos, ensuring versatility and instant recognition
								across diverse platforms.
							</p>
						</div>
						<div className="story-design4">
							<p
								data-scroll
								data-scroll-speed={calculateScrollSpeed2()}
								data-scroll-direction="horizontal"
							>
								Beyond logos, our expertise extends to crafting enchanting
								product packaging designs that seamlessly blend visual appeal
								with brand narrative. We strive to create packaging that not
								only catches the eye but also narrates your brand's story and
								unique value propositions effectively.
							</p>{" "}
							<img
								src={assets.studioDesign4}
								alt="studioDesign"
								data-scroll
								data-scroll-speed={calculateScrollSpeed()}
							/>
						</div>
						{/* <div className="story-design5"> */}
						<p
							className="story-designp"
							data-scroll
							data-scroll-speed={calculateScrollSpeed()}
						>
							At C9, we are committed to delivering design excellence that
							surpasses expectations. Our hallmark lies in meticulous attention
							to detail, boundless creativity, and unwavering dedication to
							client satisfaction. Continuously evolving with the latest design
							trends, we stand poised to elevate your brand identity to
							unparalleled heights.
						</p>
						{/* </div> */}
						<div className="story-design5">
							<img
								src={assets.studioDesign5}
								alt="studioDesign"
								data-scroll
								data-scroll-speed={calculateScrollSpeed()}
							/>
							<p
								data-scroll
								data-scroll-speed={calculateScrollSpeed2()}
								data-scroll-direction="bottom"
							>
								If you seek a design partner in Australia who can infuse magic
								into your branding journey, look no further than our passionate
								team of designers. Reach out to us today, and let's embark on a
								transformative design voyage together.
							</p>
						</div>
					</div>
					<div className="story-footer">
						<Footer />
					</div>
				</div>
			</LocomotiveScrollProvider>
		</div>
	)
}

export default Story
