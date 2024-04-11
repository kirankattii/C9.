import React, { useState } from "react"
import { assets } from "../../assets/asset"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import "./home.css"
const Home = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [conterTrigger, setCounterTrigger] = useState(false)

	const handleMouseOver = (index) => {
		if (activeIndex !== index) {
			setActiveIndex(index)
		}
	}
	return (
		<div>
			<div className="home">
				<div className="home-content">
					<div className="home-text">
						<h1 className="text-discover">Discover</h1>
						<div className="text-out-artistry">
							<span>OUR</span>
							<h1>artistry</h1>
						</div>
					</div>
					<img
						className="homepage-img"
						src={assets.homeImg1}
						alt=""
					/>
				</div>
				<div className="home-bottom">
					<p>KNOW MORE</p>
					<img
						src={assets.elevating_asthetics}
						alt="elevating_asthetics"
					/>
				</div>
			</div>
			<div className="home-ourdesign">
				<div className="home-orange-bg"></div>
				<div className="home-white-bg"></div>
				<div className="home-ourdesign-content">
					<div className="left-ourdesign">
						<div>
							<h1 className="text-our">OUR</h1>
							<h1 className="text-design">DESIGN</h1>
						</div>
						<h1 className="text-odyssey">ODYSSEY</h1>
					</div>
					<div className="right-ourdesign">
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
					</div>
					<img
						src={assets.ourdesign}
						alt="ourdesign"
					/>
				</div>
			</div>
			<div className="home-ourpride">
				<div className="home-ourpride-content">
					<div className="our-pride-text">
						<div className="text-ourpride">
							<div className="text-ourideas">
								<h2>OUR</h2>
								<p>Bringing Ideas</p>
							</div>
							<h2 className="text-pride">Pride</h2>
						</div>
						<p className="text-throughdesign">to Life Through Design</p>
					</div>
					<div className="ourpride-lists">
						{/* <div className="design-list">
							<span>.1</span>
							<p>Web development</p>
							<img
								src={assets.right_arrow}
								alt=""
							/>
						</div>
						<div className="design-list">
							<span>.2</span>
							<p>Web development</p>
							<img
								src={assets.right_arrow}
								alt=""
							/>
						</div>
						<div className="design-list">
							<span>.3</span>
							<p>Web development</p>
							<img
								src={assets.right_arrow}
								alt=""
							/>
						</div>
						<div className="design-list">
							<span>.4</span>
							<p>Web development</p>
							<img
								src={assets.right_arrow}
								alt=""
							/>
						</div>
						<div className="design-list">
							<span>.5</span>
							<p>Web development</p>
							<img
								src={assets.right_arrow}
								alt=""
							/>
						</div> */}
						{[1, 2, 3, 4, 5].map((num, index) => (
							<div
								className={`design-list ${
									activeIndex === index ? "active" : ""
								}`}
								key={index}
								onMouseOver={() => handleMouseOver(index)}
							>
								<span className="ourpride-list-no">.{num}</span>
								<p className="ourpride-list-name">Web development</p>
								<img
									src={assets.right_arrow}
									alt=""
								/>
							</div>
						))}
					</div>
					<div className="our-price-para">
						<p>
							At C9, we blend creativity and technical expertise to craft
							exceptional websites that engage audiences and reflect your
							brand's identity. Our user-centric approach ensures seamless
							functionality across devices, driving conversions and enhancing
							user experiences. Whether you need a sleek showcase or a robust
							e-commerce platform, partner with us to create captivating online
							experiences that inspire.
						</p>
					</div>
					<div className="explore-new-forntier-btn">
						<div className="explore-new-forntier-btn-border">
							<button>Explore New Frontiers</button>
						</div>
					</div>
				</div>
			</div>
			<div className="home-whatsets">
				<ScrollTrigger
					onEnter={() => setCounterTrigger(true)}
					onExit={() => setCounterTrigger(false)}
				>
					<div className="home-whatsets-container">
						<div className="left-whatsets">
							{/* <div></div> */}
							<div className="text-whatsets">
								<h2 className="text-whatsets-whatsets">WHAT SETS</h2>
								<div>
									<h2 className="text-whatsets-us">US</h2>
									<h2 className="text-apart">APART</h2>
								</div>
							</div>
							<p className="question-mark-small">?</p>
						</div>
						<div className="right-whatsets">
							<p className="question-mark">?</p>

							<div className="whatsets-orangebg">
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
							</div>
						</div>
					</div>
				</ScrollTrigger>
			</div>
			<div className="home-digitalbrand">
				<div className="home-digitalbrand-content">
					<div className="home-digitalbrand-heading">
						<h1>Catapult your brand to digital stardom</h1>
						<p>with our game-changing marketing wizardry</p>
					</div>
					<div className="home-features">
						<div className="top-home-features">
							<div className="home-feature1">
								<img
									src={assets.homefeatures1}
									alt=""
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
							</div>
							<div className="home-feature1 home-feature3">
								<img
									src={assets.homefeatures2}
									alt=""
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
							</div>
						</div>
						<div className="bottom-home-features">
							<div className="home-feature2">
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
									alt=""
								/>
							</div>
							<div className="home-feature2 home-feature4">
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
									src={assets.homefeatures4}
									alt=""
								/>
							</div>
						</div>
					</div>
					<button className="home-featured-btn">FEATURED</button>
				</div>
			</div>
			<div className="home-testimonials">
				<div className="home-testimonials-container">
					<div className="home-testimonials-text">
						<h1 className="text-custjourny">Delving into customer journeys</h1>
						<div>
							<h2 className="text-insights">insights through invaluable</h2>
							<h2 className="text-freedback">feedback</h2>
						</div>
					</div>
					<div className="home-testimonial-exp1">
						<div className="home-testimonial-exp1-img">
							<img
								src={assets.user1}
								alt=""
							/>
						</div>
						<div className="home-testimonial-exp1-content">
							<p>
								Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
								eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
								metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
								interdum tellus elit sed risus. Maecenas eget condimentum velit,
								sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
								torquent per conubia nostra, per inceptos himenaeos.
							</p>
							<span>SIMON COLE</span>
						</div>
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
						<form action="">
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
							>
								Your Meassage
							</textarea>
							<button>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
