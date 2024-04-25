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
import CircularSlide from "../CircularSlide/CircularSlide"
const Story = () => {
	const containerRef = useRef(null)

	useEffect(() => {
		const scroll = new locomotiveScroll({
			el: document.querySelector("[data-scroll-container]"),
			// smooth: true,
			smartphone: { smooth: true },
			tablet: { smooth: true },
		})
		return () => {
			if (scroll) scroll.destroy()
		}
	}, [])
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
							{/* <div> */}

							<p
								data-scroll
								data-scroll-speed={calculateScrollSpeed2()}
								// data-scroll-position="top"
								data-scroll-direction="horizontal"
							>
								<h3>OUR ORIGIN STORY</h3>
								Located in the vibrant heart of Perth, C9 Ads is a digital
								marketing powerhouse founded in 2020 with a singular mission: to
								empower businesses through exceptional digital marketing
								services. As a forward-thinking agency, we blend advanced
								digital strategies with creative solutions to ensure that every
								brand we touch not only meets but exceeds its online potential.
							</p>
							{/* </div> */}
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
								<h3>Our Commitment to Innovation and Excellence</h3>
								At C9 Ads, we recognize that the digital landscape is constantly
								evolving. That's why we're committed to staying ahead of the
								curve, ensuring our clients benefit from the latest marketing
								innovations. Whether it's through cutting-edge SEO techniques,
								compelling social media campaigns, or impactful web design, our
								goal is to set your brand apart in the competitive digital
								arena.
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
								<span> Our Services</span>: Designed to Elevate Our services are
								meticulously crafted to cover every aspect of digital marketing:{" "}
								<br />
								<br />
								<span> SEO & SMO</span>: We elevate your brand's online
								presence, ensuring top rankings in search engine results and
								enhanced social media engagement.
							</p>
						</div>
						<div className="story-design4">
							<div className="story-2phara">
								<p
									data-scroll
									data-scroll-speed={calculateScrollSpeed2()}
									data-scroll-direction="horizontal"
								>
									Web Design and Development: From aesthetic design to backend
									development, our websites are built to impress and perform.{" "}
									<br />
									<br />
									<br />
									<span style={{ textAlign: "right" }}>
										{" "}
										Product Packaging Design: We create visually appealing
										packaging that resonates with consumers and amplifies brand
										identity.
									</span>
								</p>{" "}
							</div>
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
							{/* <h3>A Team Like No Other</h3> */}
							The strength of C9 Ads lies in our team’s expertise and passion.
							Each team member brings a unique set of skills, ensuring that
							specialists handle all aspects of your digital marketing strategy.
							From strategists and designers to developers and marketers, our
							team works in harmony to deliver unparalleled results.
						</p>
						{/* </div> */}
						<div className="story-design5">
							<img
								src={assets.studioDesign5}
								alt="studioDesign"
								data-scroll
								data-scroll-speed={calculateScrollSpeed()}
							/>
							{/* <div> */}
							<p
								data-scroll
								data-scroll-speed={calculateScrollSpeed2()}
								data-scroll-direction="bottom"
							>
								<h3>Building Brands with a Purpose</h3>
								If you seek a design partner in Australia who can infuse magic
								into your branding journey, look no further than our passionate
								team of designers. Reach out to us today, and let's embark on a
								transformative design voyage together.
							</p>

							{/* </div> */}
						</div>
						<div className="story-courasal">{/* <CircularSlide /> */}</div>
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
