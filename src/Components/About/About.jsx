import React, { useEffect, useState } from "react"
import "./About.css"
import { assets } from "../../assets/asset"
import { motion } from "framer-motion"
import Footer from "../Footer/Footer"

const About = () => {
	const [isBackgroundCover, setIsBackgroundCover] = useState(false)

	useEffect(() => {
		// Delay the background cover change after 3 seconds
		const timeout = setTimeout(() => {
			setIsBackgroundCover(true)
		}, 3000)

		return () => clearTimeout(timeout) // Clear the timeout on component unmount
	}, []) // Empty dependency array to run effect only once

	const [activeTab, setActiveTab] = useState(0)

	const handleTabClick = (index) => {
		setActiveTab(index)
	}
	return (
		<div className={`about ${isBackgroundCover ? "background-cover" : ""}`}>
			<div className="about-landing">
				<h1 className="about-joutney">JOURNEYS</h1>
				<div>
					<span>
						<p className="about-span1">Boundless Stories</p>
						<p className="about-span2">Endless Inspirations</p>
					</span>
					<h1 className="about-in">IN</h1>
					<h1 className="about-ink">INK</h1>
				</div>
			</div>
			<div className="about-content">
				<div className="about-click-functionality">
					<p className="about-click-functionality-title">
						Welcome to C9 Ads: Crafting Digital Excellence in Perth
					</p>
					<div className="about-btns">
						<p
							className={activeTab === 0 ? "active" : ""}
							onClick={() => handleTabClick(0)}
						>
							{activeTab === 0 ? "ABOUT US" : ""}
						</p>
						<p
							className={activeTab === 1 ? "active" : ""}
							onClick={() => handleTabClick(1)}
						>
							{activeTab === 1 ? "COMMITMENT" : ""}
						</p>
						<p
							className={activeTab === 2 ? "active" : ""}
							onClick={() => handleTabClick(2)}
						>
							{activeTab === 2 ? "TEAM" : ""}
						</p>
					</div>
				</div>
				<div className="about-slide-tabs">
					<div
						className="about-click-content"
						style={{ display: activeTab === 0 ? "block" : "none" }}
					>
						<h2>Our Origin Story</h2>
						<p>
							Located in the vibrant heart of Perth, C9 Ads is a digital
							marketing powerhouse founded in 2020 with a singular mission: to
							empower businesses through exceptional digital marketing services.
							As a forward-thinking agency, we blend advanced digital strategies
							with creative solutions to ensure that every brand we touch not
							only meets but exceeds its online potential.
						</p>
					</div>
					<div
						className="about-click-content"
						style={{ display: activeTab === 1 ? "block" : "none" }}
					>
						<h2>Our Commitment to Innovation and Excellence</h2>
						<p>
							At C9 Ads, we recognize that the digital landscape is constantly
							evolving. That's why we're committed to staying ahead of the
							curve, ensuring our clients benefit from the latest marketing
							innovations. Whether it's through cutting-edge SEO techniques,
							compelling social media campaigns, or impactful web design, our
							goal is to set your brand apart in the competitive digital arena
						</p>
					</div>
					<div
						className="about-click-content"
						style={{ display: activeTab === 2 ? "block" : "none" }}
					>
						<h2>A Team Like No Other</h2>
						<p>
							The strength of C9 Ads lies in our team’s expertise and passion.
							Each team member brings a unique set of skills, ensuring that
							specialists handle all aspects of your digital marketing strategy.
							From strategists and designers to developers and marketers, our
							team works in harmony to deliver unparalleled results.
						</p>
					</div>
				</div>
				<div className="about-banner-content">
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: -120 }}
						transition={{ duration: 0.4, delay: 0 }}
					>
						<img
							src={assets.aboutcontent1}
							alt=""
						/>
						<h3>Understands Your Vision</h3>
						<p>
							We take the time to understand your business goals and tailor our
							strategies accordingly.
						</p>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: -120 }}
						transition={{ duration: 0.4, delay: 0.1 }}
					>
						<img
							src={assets.aboutcontent2}
							alt=""
						/>
						<h3>Delivers Measurable vision</h3>
						<p>
							Every strategy is executed with a focus on achieving tangible
							outcomes that contribute to your bottom line.
						</p>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: -120 }}
						transition={{ duration: 0.4, delay: 0.2 }}
					>
						<img
							src={assets.aboutcontent3}
							alt=""
						/>
						<h3>Offers Comprehensive Solutions</h3>
						<p>
							With services spanning the full spectrum of digital marketing, we
							provide everything you need to succeed in one place.
						</p>
					</motion.div>
				</div>
				<h2 className="about-Designed-Elevate">
					Our Services: Designed to Elevate
				</h2>
				<div className="about-our-services">
					<div className="about-service">
						<motion.div
							initial={{ x: 150, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 1,
								x: { type: "spring", stiffness: 60 },
								opacity: { duration: 1 },
								ease: "easeIn",
								duration: 1,
							}}
							className="about-service-img"
						>
							<img
								src={assets.aboutService1}
								alt=""
							/>{" "}
							<img
								src={assets.aboutService3}
								alt=""
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								delay: 0.1,

								ease: "easeIn",
								duration: 0.4,
							}}
							className="about-service-content"
						>
							<h3>SEO & SMO</h3>
							<p>
								We elevate your brand's online presence, ensuring top rankings
								in search engine results and enhanced social media engagement
							</p>
						</motion.div>
					</div>
					<div className="about-service">
						<motion.img
							initial={{ x: -150, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 1,
								x: { type: "spring", stiffness: 60 },
								opacity: { duration: 1 },
								ease: "easeIn",
								duration: 1,
							}}
							src={assets.aboutService2}
							alt=""
						/>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								delay: 0.1,

								ease: "easeIn",
								duration: 0.4,
							}}
							className="about-service-content"
						>
							<h3>Web Design and Development</h3>
							<p>
								From aesthetic design to backend development, our websites are
								built to impress and perform.
							</p>
						</motion.div>
					</div>
					<div className="about-service">
						<motion.img
							initial={{ x: 150, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 1,
								x: { type: "spring", stiffness: 60 },
								opacity: { duration: 1 },
								ease: "easeIn",
								duration: 1,
							}}
							src={assets.aboutService4}
							alt=""
						/>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								delay: 0.1,

								ease: "easeIn",
								duration: 0.4,
							}}
							className="about-service-content"
						>
							<h3>Product Packaging Design</h3>
							<p>
								We create visually appealing packaging that resonates with
								consumers and amplifies brand identity.
							</p>
						</motion.div>
					</div>
					<div className="about-service">
						<motion.img
							initial={{ x: -150, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 1,
								x: { type: "spring", stiffness: 60 },
								opacity: { duration: 1 },
								ease: "easeIn",
								duration: 1,
							}}
							src={assets.aboutService5}
							alt=""
						/>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								delay: 0.1,

								ease: "easeIn",
								duration: 0.4,
							}}
							className="about-service-content"
						>
							<h3>Logo Designing</h3>
							<p>
								Our logos aren’t just designs; they are strategic brand marks
								that encapsulate the essence of your business
							</p>
						</motion.div>
					</div>
				</div>
				<div className="building-brand">
					<motion.div
						initial={{ y: 200 }}
						whileInView={{ y: 0 }}
						transition={{
							delay: 0,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 0.2,
						}}
						className="building-brand-bg"
					></motion.div>
					<motion.div
						initial={{ y: 250, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.3,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 0.5,
						}}
					>
						<h2>Building Brands with a Purpose</h2>
						<p>
							Since our inception, we've been passionate about transforming not
							just businesses but the industries they operate in. Our approach
							is always holistic, ensuring that every marketing strategy
							increases visibility and enhances overall brand value and customer
							engagement.
						</p>
					</motion.div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default About
