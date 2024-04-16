import React from "react"
import "./services.css"
import { assets } from "../../assets/asset"
import { motion } from "framer-motion"

const Services = () => {
	const [activeStep, setActiveStep] = React.useState(0)
	const steps = ["Q1", "Q2", "Q3", "Q4", "Q1", "Q2"]

	const handleStep = (step) => () => {
		setActiveStep(step)
	}
	return (
		<div className="services">
			<motion.div
				initial={{ z: -100, opacity: 0 }}
				animate={{ z: 0, opacity: 1 }}
				transition={{
					delay: 0.2,
					x: { type: "spring", stiffness: 60 },
					opacity: { duration: 1 },
					ease: "easeIn",
					duration: 1,
				}}
				className="services-header"
			>
				<motion.h1
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						delay: 0.2,
						x: { type: "spring", stiffness: 60 },
						opacity: { duration: 1 },
						ease: "easeIn",
						duration: 1,
					}}
					className="text-uncover"
				>
					uncover
				</motion.h1>
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						delay: 0.2,
						x: { type: "spring", stiffness: 60 },
						opacity: { duration: 1 },
						ease: "easeIn",
						duration: 1,
					}}
					className="service-right-text"
				>
					<h2>the array of</h2>
					<h2>options at your</h2>
					<div className="services-bottom-right-text">
						<div>
							<p className="services-bottom-right-text-p1">
								Transforming Visions into Reality
							</p>
							<p className="services-bottom-right-text-p2">
								Elevate Your Journey with Our Diverse and Tailored Services,
								Crafted for Success
							</p>
						</div>
						<h3>disposal</h3>
					</div>
				</motion.div>
			</motion.div>
			<div className="services-content">
				<motion.img
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{
						delay: 0.4,
						x: { type: "spring", stiffness: 60 },
						opacity: { duration: 1 },
						ease: "easeIn",
						duration: 1,
					}}
					src={assets.service_content_img}
					alt="service_content_img"
				/>
				<motion.p
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{
						delay: 0.4,
						x: { type: "spring", stiffness: 60 },
						opacity: { duration: 1 },
						ease: "easeIn",
						duration: 1,
					}}
				>
					Our comprehensive suite of tailored services is designed to elevate
					your journey and transform visions into reality. From strategic
					planning to innovative solutions, we are committed to empowering
					excellence and enriching experiences. With a focus on customization
					and quality, we ensure that every step of your journey is marked by
					success and achievement. Partner with us to unlock new possibilities
					and achieve your goals with confidence.
				</motion.p>
			</div>
			<div className="all-service-provided">
				<div className="timeline">
					<div className="timeline-content">
						{activeStep === 0 ? (
							<div className="services-slides">
								<motion.img
									initial={{ x: -100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										delay: 0.2,
										x: { type: "spring", stiffness: 60 },
										opacity: { duration: 0.8 },
										ease: "easeIn",
										duration: 0.8,
									}}
									src={assets.social_media_marketing}
									alt="social_media_marketing"
								/>
								<motion.div
									initial={{ x: 100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										delay: 0.2,
										x: { type: "spring", stiffness: 60 },
										opacity: { duration: 0.8 },
										ease: "easeIn",
										duration: 0.8,
									}}
								>
									<h2>Social Media Marketing</h2>
									<p>
										In today's digital landscape, social media is a powerful
										tool for brand engagement and growth. At C9, we understand
										the nuances of effective social media marketing and leverage
										our expertise to elevate your brand's presence across
										platforms. From crafting compelling content to strategic
										campaign management, we help you connect authentically with
										your audience, drive engagement, and achieve measurable
										results. Let us harness the power of social media to amplify
										your brand's story and foster meaningful connections
									</p>
								</motion.div>
							</div>
						) : activeStep === 1 ? (
							<div className="services-slides">
								<motion.img
									initial={{ x: 100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										delay: 0.2,
										x: { type: "spring", stiffness: 60 },
										opacity: { duration: 0.8 },
										ease: "easeIn",
										duration: 0.8,
									}}
									src={assets.web_development}
									alt="web_development"
								/>
								<motion.div>
									<h2>Web Development</h2>
									<p>
										Unlock the full potential of your online presence with C9's
										expert web development services. Just as great design
										transcends aesthetics, a well-crafted website is more than
										just pixels on a screen—it's a gateway to immersive digital
										experiences. Our team combines creativity with technical
										expertise to build websites that not only look stunning but
										also function seamlessly across platforms. Collaborating
										closely with clients, we tailor each website to reflect your
										brand identity while ensuring user-friendly navigation and
										optimal performance
									</p>
								</motion.div>
							</div>
						) : activeStep === 2 ? (
							<div className="services-slides">
								<img
									src={assets.seo}
									alt="seo"
								/>
								<div>
									<h2>Search Engine Optimization (SEO)</h2>
									<p>
										Stand out in the digital crowd and increase your online
										visibility with C9's comprehensive SEO strategies. Our team
										delves deep into keyword research, on-page optimization, and
										technical SEO to enhance your website's ranking on search
										engine results pages. By aligning content strategies with
										SEO best practices, we drive organic traffic to your site,
										improving conversions and ROI. Partner with us to navigate
										the ever-evolving SEO landscape and unlock new avenues for
										growth.
									</p>
								</div>
							</div>
						) : activeStep === 3 ? (
							<div className="services-slides">
								<img
									src={assets.logo_design}
									alt="logo_design"
								/>
								<div>
									<h2>Logo Design</h2>
									<p>
										Your logo is the visual cornerstone of your brand identity,
										embodying its personality and values. At C9, we take logo
										design beyond aesthetics, creating memorable symbols that
										resonate with your audience. Our collaborative approach
										ensures that your logo reflects your brand essence while
										maintaining versatility across digital and print platforms.
										Let us craft a distinctive logo that leaves a lasting
										impression and sets your brand apart from the competition.
									</p>
								</div>
							</div>
						) : activeStep === 4 ? (
							<div className="services-slides">
								<img
									src={assets.packaging_design}
									alt="packaging_design"
								/>
								<div>
									<h2>Packaging Design</h2>
									<p>
										Capture attention and inspire purchase decisions with C9's
										innovative packaging designs. We understand that packaging
										is not just about protection—it's a powerful storytelling
										tool that communicates your brand's narrative and value
										proposition. Our designers blend creativity with market
										insights to create packaging that stands out on shelves and
										reinforces brand identity. Elevate your product's visual
										appeal and enhance brand perception with packaging that
										captivates and delights consumers.
									</p>
								</div>
							</div>
						) : null}
					</div>
					<div className="service-absolute">
						<motion.div
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.4,
								x: { type: "spring", stiffness: 60 },
								opacity: { duration: 1 },
								ease: "easeIn",
								duration: 1,
							}}
							className="buttons"
							alternativeLabel
							nonLinear
							activeStep={activeStep}
						>
							<button
								onClick={handleStep(0)}
								style={activeStep === 0 ? { filter: "brightness(1.2)" } : null}
							>
								Social Media Marketing
							</button>
							<button
								onClick={handleStep(1)}
								style={activeStep === 1 ? { filter: "brightness(1.2)" } : null}
							>
								Web development
							</button>
							<button
								onClick={handleStep(2)}
								style={activeStep === 2 ? { filter: "brightness(1.2)" } : null}
							>
								SEO
							</button>
							<button
								onClick={handleStep(3)}
								style={activeStep === 3 ? { filter: "brightness(1.2)" } : null}
							>
								Logo Design
							</button>
							<button
								onClick={handleStep(4)}
								style={activeStep === 4 ? { filter: "brightness(1.2)" } : null}
							>
								Packaging Design
							</button>
							{/* <button
							onClick={handleStep(5)}
							style={
								activeStep === 5
									? {
											filter: "brightness(1.2)",
									  }
									: null
							}
						>
							Q2
						</button> */}
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
