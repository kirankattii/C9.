import React, { useEffect, useRef, useState } from "react"
import "./web.css"
import { assets } from "../../assets/asset"
import ParallaxEffect from "./ParallaxEffect/ParallaxEffect"
const Web = () => {
	const videoRef = useRef(null)
	const [isScrolled, setIsScrolled] = useState(false)
	const [isContentScrolled, setIsContentScrolled] = useState(false)
	const [isContentScrolle2, setIsContentScrolled2] = useState(false)
	const [isVideoInContent5, setIsVideoInContent5] = useState(false)

	const handleScroll = () => {
		if (videoRef.current) {
			const videoTop = videoRef.current.getBoundingClientRect().top
			if (videoTop <= 600) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		const content = document.querySelector(".web-text-content2")
		if (content) {
			const contentBottom = content.getBoundingClientRect().bottom
			if (contentBottom <= window.innerHeight - 300) {
				setIsContentScrolled(true)
			} else {
				setIsContentScrolled(false)
			}
		}
		const content2 = document.querySelector(".web-text-content3")
		if (content2) {
			const contentBottom = content.getBoundingClientRect().bottom
			if (contentBottom <= window.innerHeight - 800) {
				setIsContentScrolled2(true)
			} else {
				setIsContentScrolled2(false)
			}
		}

		const content3 = document.querySelector(".web-text-content2")
		if (content3) {
			const content3Top = content2.getBoundingClientRect().top
			if (content3Top <= -50) {
				// If web-text-content2 is at the top of the window or above it
				// Add a class to main-content-video1
				document
					.querySelector(".main-content-video1")
					.classList.add("content2-reached")
			} else {
				// Otherwise, remove the class
				document
					.querySelector(".main-content-video1")
					.classList.remove("content2-reached")
			}
		}

		const content4 = document.querySelector(".web-text-content4")
		if (content4) {
			const content4Bottom = content4.getBoundingClientRect().bottom
			const mainContentVideo2 = document.querySelector(".main-content-video2")
			if (content4Bottom <= 340) {
				mainContentVideo2.classList.add("moved-down")
			} else {
				mainContentVideo2.classList.remove("moved-down")
			}
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])
	return (
		<div className="web">
			<div className="web-container">
				<div className="web-header">
					<h1>Transform Your Online Presence with Expert Web Development</h1>
					<h3>Building Digital Experiences, One Pixel at a Time.</h3>
					<p>Elevate Your Digital Impact</p>
				</div>
				<div className="web-content-video">
					<div
						className={`web-v1 ${isScrolled ? "scrolled" : ""}`}
						ref={videoRef}
					>
						<video
							// width="200"

							autoPlay
							muted
							loop
							// controls
						>
							<source
								src={assets.web_v1}
								type="video/mp4"
							/>
						</video>
					</div>
					<p className="web-text-content">
						In today's digital age, your website is often the first impression
						potential customers have of your business. At Pitamaas, we excel in
						creating high-performance, visually stunning websites that not only
						capture your brand's essence but also deliver tangible results. Our
						team of experienced web developers and designers collaborate to
						provide tailored web solutions that meet your unique business
						requirements.
					</p>
					<div className="web-main-content">
						<div className="main-content-video">
							<div
								className={`main-content-video1 ${
									isContentScrolled ? "scrolled-down" : ""
								}`}
							>
								<video
									// width="200"

									autoPlay
									muted
									loop
									// controls
								>
									<source
										src={assets.web_v1}
										type="video/mp4"
									/>
								</video>
							</div>
							<div
								className={`main-content-video2 ${
									isContentScrolle2 ? "scrolled-down2" : ""
								} ${isVideoInContent5 ? "moved-down" : ""}`}
							>
								<video
									// width="200"

									autoPlay
									muted
									loop
									// controls
								>
									<source
										src={assets.web_v2}
										type="video/mp4"
									/>
								</video>
							</div>
							<div className="main-content-video3">
								<video
									// width="200"

									autoPlay
									muted
									loop
									// controls
								>
									<source
										src={assets.web_v3}
										type="video/mp4"
									/>
								</video>
							</div>
						</div>
						<div className="horizontal-text-content">
							<div className="web-text-content2">
								<h1>Our Comprehensive Web Development Services</h1>
								<ul>
									<li>
										<h2>Custom Website Design</h2>
										<p>
											Our custom website design services ensure your website
											stands out in a crowded marketplace. We create
											aesthetically pleasing, user-centric designs that resonate
											with your brand identity and engage your audience
											effectively.
										</p>
									</li>
									<li>
										<h2>E-commerce Development </h2>
										<p>
											Revolutionize your online store with our robust e-commerce
											solutions. We develop secure, scalable, and user-friendly
											e-commerce platforms designed to enhance the shopping
											experience and drive sales growth.
										</p>
									</li>
								</ul>
							</div>
							<div className="web-text-content3">
								<h1>Our Comprehensive Web Development Services</h1>
								<ul>
									<li>
										<h2>Content Management Systems (CMS)</h2>
										<p>
											Manage your website content effortlessly with our CMS
											solutions. We specialize in developing websites on leading
											CMS platforms such as WordPress, Joomla, and Drupal,
											providing you with full control over your site
										</p>
									</li>
									<li>
										<h2>Responsive Web Design </h2>
										<p>
											In an increasingly mobile world, responsive design is
											essential. Our responsive web designs ensure optimal
											performance and appearance across all devices, from
											desktops to smartphones.
										</p>
									</li>
								</ul>
							</div>
							<div className="web-text-content4">
								<h1>Our Comprehensive Web Development Services</h1>
								<ul>
									<li>
										<h2>Web Application Development</h2>
										<p>
											Optimize your business operations and boost user
											engagement with our custom web applications. We develop
											powerful, bespoke web applications tailored to meet your
											specific business needs.
										</p>
									</li>
									<li>
										<h2>Search Engine Optimization (SEO) </h2>
										<p>
											A visually appealing website is only as good as its
											visibility. Our web development integrates SEO best
											practices, ensuring your site ranks highly on search
											engines and attracts valuable organic traffic.
										</p>
									</li>
									<li>
										<h2>Website Maintenance and Support</h2>
										<p>
											Ensure your website remains functional and secure with our
											maintenance and support services. We offer regular
											updates, security checks, and performance optimizations to
											keep your site running smoothly.
										</p>
									</li>
								</ul>
							</div>
							<div className="web-text-content5">
								<div className="web-text-innerContent5">
									<div>
										<h3>Discovery and Planning</h3>
										<p>
											We begin by thoroughly understanding your business, goals,
											and target audience. This allows us to create a detailed
											project plan and timeline that align with your objectives.
										</p>
									</div>
									<div>
										<h3>Ongoing Support</h3>
										<p>
											Our commitment to your success extends beyond the launch.
											We provide ongoing support and maintenance to keep your
											website secure, up-to-date, and performing optimally.
										</p>
									</div>
								</div>
								<div className="web-text-innerContent5 web-text-innerContent55">
									<div>
										<h3>Design and Prototyping</h3>
										<p>
											Our designers develop wireframes and prototypes to
											visualize the layout and functionality of your website. We
											refine these designs based on your feedback to ensure they
											meet your vision.
										</p>
									</div>
									<h2>Our Web Development Process</h2>
									<div>
										<h3>Launch and Optimization</h3>
										<p>
											Upon completion, we deploy your website to the live server
											and monitor its performance. We continue to make
											optimizations to ensure the best possible user experience.
										</p>
									</div>
								</div>
								<div className="web-text-innerContent5 ">
									<div>
										<h3>Development</h3>
										<p>
											Our developers bring the designs to life using the latest
											coding standards and technologies, ensuring your website
											is fast, responsive, and SEO-friendly.
										</p>
									</div>
									<div>
										<h3>Testing</h3>
										<p>
											We conduct rigorous testing across various browsers and
											devices to ensure flawless performance. We address any
											bugs or usability issues to ensure a seamless user
											experience
										</p>
									</div>
								</div>
							</div>
							<div className="web-content5-media">
								<h1>Our Web Development Process</h1>
								<ul>
									<li>
										<h2>Discovery and Planning</h2>
										<p>
											We begin by thoroughly understanding your business, goals,
											and target audience. This allows us to create a detailed
											project plan and timeline that align with your objectives.
										</p>
									</li>
									<li>
										<h2>Ongoing Support</h2>
										<p>
											Our commitment to your success extends beyond the launch.
											We provide ongoing support and maintenance to keep your
											website secure, up-to-date, and performing optimally.
										</p>
									</li>
									<li>
										<h2>Design and Prototyping</h2>
										<p>
											Our designers develop wireframes and prototypes to
											visualize the layout and functionality of your website. We
											refine these designs based on your feedback to ensure they
											meet your vision.
										</p>
									</li>
									<li>
										{" "}
										<h2>Launch and Optimization</h2>
										<p>
											Upon completion, we deploy your website to the live server
											and monitor its performance. We continue to make
											optimizations to ensure the best possible user experience.
										</p>
									</li>

									<li>
										<h2>Development</h2>
										<p>
											Our developers bring the designs to life using the latest
											coding standards and technologies, ensuring your website
											is fast, responsive, and SEO-friendly.
										</p>
									</li>
									<li>
										<h2>Testing</h2>
										<p>
											We conduct rigorous testing across various browsers and
											devices to ensure flawless performance. We address any
											bugs or usability issues to ensure a seamless user
											experience
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* <ParallaxEff */}
				<ParallaxEffect />
			</div>
		</div>
	)
}

export default Web
