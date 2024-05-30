import { useEffect, useState } from "react"
import { assets, ourPride } from "../../assets/asset"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import "./home.css"
import { motion } from "framer-motion"
import HomeSlides from "../HomeSlides/HomeSlides"
import ProvideCoa from "./ProvideCoa/ProvideCoa"
import { Link } from "react-router-dom"

const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
})
// whileInView={{ opacity: 1, x: 0 }}
// 				initial={{ opacity: 0, x: -100 }}
// 				transition={{ duration: 0.5 }}

const container1 = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
})

const Home = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [conterTrigger, setCounterTrigger] = useState(false)
	const [showOurPride, setShowOurPride] = useState(false)
	const handleClick = () => {
		setShowOurPride(true)
	}

	const handleMouseOver = (index) => {
		// if (activeIndex !== index) {
		setActiveIndex(index)
		// }
	}
	const [waveAnimation, setWaveAnimation] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setWaveAnimation(true)
		}, 1000) // Delay for the animation to start after 1 second

		return () => clearTimeout(timeout)
	}, [])

	const [isMuted, setIsMuted] = useState(true)

	const handleMouseEnter = () => {
		setIsMuted(false) // Unmute the video on mouse enter
	}

	const handleMouseLeave = () => {
		setIsMuted(true) // Mute the video again when mouse leaves
	}

	return (
		<div>
			<div className="home">
				<div className="home-content">
					{/* <div className={`home-text ${waveAnimation ? "wave-animation" : ""}`}> */}
					<div className="home-text">
						<motion.h1
							variants={container(0)}
							initial="hidden"
							animate="visible"
							className="text-discover"
						>
							Discover
						</motion.h1>
						<motion.div
							variants={container(0.5)}
							initial="hidden"
							animate="visible"
							className="text-out-artistry"
						>
							<span>OUR</span>
							<h1>artistry</h1>
						</motion.div>
					</div>
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1.2 }}
						className="homepage-img"
						src={assets.homeImg1}
						alt=""
					/>
				</div>
				<motion.div
					variants={container(1)}
					initial="hidden"
					animate="visible"
					className="home-bottom"
				>
					<p>KNOW MORE</p>
					<div className="service-tags">
						<span>
							<Link to={"/social-media-marketing"}>Social Media Marketing</Link>
						</span>
						<hr />
						<span>
							<Link to={"/web-development"}>Web Development</Link>
						</span>
						<hr />
						<span>
							<Link to={"/seo"}>SEO</Link>
						</span>
						<hr />
						<span>
							<Link to={"/logo"}>Logo Design</Link>
						</span>
						<hr />
						<span>
							<Link to={"/packaging2"}>Packaging Design</Link>
						</span>
					</div>
				</motion.div>
			</div>
			<div className="home-ourdesign">
				<h2 className="ourdesign-bg-text1">VALUES</h2>
				<h2 className="ourdesign-bg-text2">Vision</h2>
				<h2 className="ourdesign-bg-text3">Mission</h2>
				<h2 className="ourdesign-bg-text4">GOALS</h2>
				<h2 className="ourdesign-bg-text5">TEAM</h2>
				<h2 className="ourdesign-bg-text6">Achivements</h2>
				<div className="home-orange-bg">
					<div className="home-our-design">
						<h1 className="text-our">OUR</h1>
						<h1 className="text-design">DESIGN</h1>
					</div>
					<motion.p
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: 100 }}
						transition={{ duration: 0.5 }}
					>
						Welcome to our Australian design studio, where we specialize in
						creating stunning branding solutions for businesses of all sizes.
						From logo design to product packaging, we elevate brands with
						creativity and strategic insight. Our collaborative approach ensures
						designs that
					</motion.p>
				</div>
				<div className="home-white-bg">
					<h1 className="text-odyssey">ODYSSEY</h1>
					<motion.p
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: 100 }}
						transition={{ duration: 0.5 }}
					>
						resonate with your audience and stand out in the market. Let us help
						you craft a memorable brand identity that makes a lasting
						impression. Contact us today to discuss your project and discover
						the power of great design.
					</motion.p>
				</div>
				<div className="home-ourdesign-content">
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5 }}
						className="left-ourdesign"
					>
						<div className="media-home-our-design">
							<h1 className="media-text-our">OUR</h1>
							<h1 className="media-text-design">design</h1>
						</div>
						<h1 className="media-home-our-odyssey">ODYSSEY</h1>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: 100 }}
						transition={{ duration: 0.5 }}
						className="right-ourdesign"
					>
						<p>
							Welcome to our Australian design studio, where we specialize in
							creating stunning branding solutions for businesses of all sizes.
							From logo design to product packaging, we elevate brands with
							creativity and strategic insight. Our collaborative approach
							ensures designs that
						</p>
						<p>
							resonate with your audience and stand out in the market. Let us
							help you craft a memorable brand identity that makes a lasting
							impression. Contact us today to discuss your project and discover
							the power of great design.
						</p>
					</motion.div>
					<motion.img
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: 200 }}
						transition={{ duration: 0.8 }}
						src={assets.ourdesign}
						alt="ourdesign"
					/>
				</div>
			</div>
			<div className="video-content">
				<div className="custom-cursor">
					<video
						autoPlay
						loop
						controls
						muted={isMuted} // Set muted state based on isMuted
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<source
							src={assets.video}
							type="video/mp4"
						/>
					</video>
				</div>

				<div className="home-ourpride">
					<div className="home-ourpride-content">
						<div className="our-pride-text">
							<div className="text-ourpride">
								<motion.div
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ opacity: 0, x: -100 }}
									transition={{ duration: 0.8 }}
									className="text-ourideas"
								>
									<h2>OUR</h2>
									<p>Bringing Ideas</p>
								</motion.div>
								<motion.h2
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ opacity: 0, x: -100 }}
									transition={{ duration: 0.6 }}
									className="text-pride"
								>
									Pride
								</motion.h2>
							</div>
							<motion.p
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.8 }}
								className="text-throughdesign"
							>
								to Life Through Design
							</motion.p>
						</div>
						<div className="ourpride-lists">
							{ourPride.map((num, index) => (
								<motion.div
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ opacity: 0, x: -100 }}
									transition={{ duration: 0.8 }}
									className={`design-list ${
										activeIndex === index ? "active" : ""
									}`}
									key={index}
									whileHover={{ opacity: 0.8 }}
									onMouseOver={() => handleMouseOver(index)}
								>
									<span className="ourpride-list-no">.{num.id}</span>
									<motion.p
										// whileHover={{ duration: 0.8 }}
										whileHover={{ scale: 1.1 }}
										className="ourpride-list-name"
									>
										{num.title}
									</motion.p>
									<img
										src={assets.right_arrow}
										alt="Arrow Image"
									/>
								</motion.div>
							))}
						</div>
						<div className="our-price-para">
							<p>
								At C9, we blend creativity and technical expertise to craft
								exceptional websites that engage audiences and reflect your
								brand's identity. Our user-centric approach ensures seamless
								functionality across devices, driving conversions and enhancing
								user experiences. Whether you need a sleek showcase or a robust
								e-commerce platform, partner with us to create captivating
								online experiences that inspire.
							</p>
						</div>
						<div className="explore-new-forntier-btn">
							<div className="explore-new-forntier-btn-border">
								<button>
									<Link to={"/services"}>Explore New Frontiers</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="home-whatsets">
				<ScrollTrigger
					onEnter={() => setCounterTrigger(true)}
					onExit={() => setCounterTrigger(false)}
				>
					{/* <div className="whatsets-bg-text"> */}
					<h2 className="whatsets-bg-text1">Data-driven</h2>
					<h2 className="whatsets-bg-text2">Results-oriented</h2>
					<h2 className="whatsets-bg-text3">Innovation</h2>
					<h2 className="whatsets-bg-text4">Creativity</h2>
					<h2 className="whatsets-bg-text5">Customization</h2>
					{/* </div> */}
					<div className="home-whatsets-container">
						<div className="left-whatsets">
							{/* <div></div> */}
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: -100 }}
								transition={{ duration: 1 }}
								className="text-whatsets"
							>
								<h2 className="text-whatsets-whatsets">WHAT SETS</h2>
								<div>
									<h2 className="text-whatsets-us">US</h2>
									<h2 className="text-apart">APART</h2>
								</div>
							</motion.div>
							<motion.p
								whileInView={{ opacity: 1, y: 0 }}
								initial={{ opacity: 0, y: -100 }}
								transition={{ duration: 1 }}
								className="question-mark-small"
							>
								?
							</motion.p>
						</div>
						<div className="right-whatsets">
							<p className="question-mark">?</p>

							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: 100 }}
								transition={{ duration: 1 }}
								className="whatsets-orangebg"
							>
								<div className="whatsets-milestone">
									<div>
										<span>
											{conterTrigger && (
												<CountUp
													start={0}
													end={295}
													duration={2.75}
												></CountUp>
											)}
											+
										</span>
										<p>Project Completed</p>
									</div>
									<div>
										<span>
											{conterTrigger && (
												<CountUp
													start={0}
													end={55}
													duration={2.75}
												></CountUp>
											)}
											+
										</span>
										<p>Project Completed</p>
									</div>
									<div>
										<span>
											{conterTrigger && (
												<CountUp
													start={0}
													end={80}
													duration={2.75}
												></CountUp>
											)}
											+
										</span>
										<p>Project Completed</p>
									</div>
								</div>
								<p>
									Our comprehensive services enable the seamless creation of
									digital products while offering objective problem-solving
									through strategic planning, advanced technology integration,
									and rigorous analysis. Moreover, our offerings are visually
									captivating, characterized by elegant color schemes and
									minimalist design principles, enhancing their overall appeal
									and user experience.
								</p>
							</motion.div>
						</div>
					</div>
				</ScrollTrigger>
			</div>
			<div className="home-procideCoa">
				<ProvideCoa />
			</div>
			<div className="home-digitalbrand">
				<div className="home-digitalbrand-content">
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: -100 }}
						transition={{ duration: 0.8 }}
						className="home-digitalbrand-heading"
					>
						<h1>Catapult your brand to digital stardom</h1>
						<p>with our game-changing marketing wizardry</p>
					</motion.div>
					<div className="home-features">
						<div className="top-home-features">
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: 100 }}
								transition={{ duration: 1 }}
								className="home-feature1"
							>
								<img
									src={assets.homefeatures1}
									alt="Features"
								/>
								<div>
									<h3>Maximizing Social Media ROI for Small Businesses</h3>
									<p>
										In this blog post, discuss how small businesses can leverage
										social media platforms effectively to maximize their return
										on investment (ROI). Include tips on identifying the right
										social media channels....................
									</p>
								</div>
							</motion.div>
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: -100 }}
								transition={{ duration: 1 }}
								className="home-feature1 home-feature3"
							>
								<img
									src={assets.homefeatures2}
									alt="Features"
								/>
								<div>
									<h3>Maximizing Social Media ROI for Small Businesses</h3>
									<p>
										In this blog post, discuss how small businesses can leverage
										social media platforms effectively to maximize their return
										on investment (ROI). Include tips on identifying the right
										social media channels....................
									</p>
								</div>
							</motion.div>
						</div>
						<div className="bottom-home-features">
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: 100 }}
								transition={{ duration: 1 }}
								className="home-feature2"
							>
								<div>
									<h3>Maximizing Social Media ROI for Small Businesses</h3>
									<p>
										In this blog post, discuss how small businesses can leverage
										social media platforms effectively to maximize their return
										on investment (ROI). Include tips on identifying the right
										social media channels....................
									</p>
								</div>{" "}
								<img
									src={assets.homefeatures3}
									alt="Features"
								/>
							</motion.div>
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: -100 }}
								transition={{ duration: 1 }}
								className="home-feature2 home-feature4"
							>
								<div>
									<h3>Maximizing Social Media ROI for Small Businesses</h3>
									<p>
										In this blog post, discuss how small businesses can leverage
										social media platforms effectively to maximize their return
										on investment (ROI). Include tips on identifying the right
										social media channels....................
									</p>
								</div>
								<img
									src={assets.homefeatures4}
									alt="Features"
								/>
							</motion.div>
						</div>
					</div>
					<button className="home-featured-btn">FEATURED</button>
				</div>
			</div>
			<HomeSlides />
			<div className="home-testimonials">
				<div className="home-testimonials-container">
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: -100 }}
						transition={{ duration: 0.8 }}
						className="home-testimonials-text"
					>
						<h1 className="text-custjourny">Delving into customer journeys</h1>
						<div>
							<h2 className="text-insights">insights through invaluable</h2>
							<h2 className="text-freedback">feedback</h2>
						</div>
					</motion.div>
					<div className="home-testimonials-text2">
						<h3>Delving into customer journeys </h3>
						<h3>insights through invaluable feedback</h3>
					</div>
					<div className="home-testimonial-exp1">
						<div className="home-testimonial-exp1-img">
							<motion.img
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.8 }}
								src={assets.user1}
								alt="Users Image"
							/>
						</div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.8 }}
							className="home-testimonial-exp1-content"
						>
							<p>
								Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
								eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
								metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
								interdum tellus elit sed risus. Maecenas eget condimentum velit,
								sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
								torquent per conubia nostra, per inceptos himenaeos.
							</p>
							<span>SIMON COLE</span>
						</motion.div>
					</div>
				</div>
				<h2 className="home-testimonal-btn">TESTIMONALS</h2>
			</div>
			<div className="home-contact">
				<div className="home-contact-content">
					<div>
						<h3>Do you have any inquiries ?</h3>
						<p>Please feel free to forward them to us.</p>
					</div>
					<div className="home-contact-inputs">
						<form
							action=""
							className="home-form"
						>
							<div>
								<input
									type="text"
									placeholder="First Name"
								/>{" "}
								<input
									type="text"
									placeholder="Last Name"
								/>
							</div>
							<div>
								<input
									type="email"
									placeholder="Email Address"
								/>{" "}
								<input
									type="number"
									placeholder="Contact no"
								/>
							</div>
							<textarea
								id=""
								rows="04"
								placeholder="Your Message"
								// defaultValue="Some initial value"
							/>

							<button className="home-submit-btn">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
