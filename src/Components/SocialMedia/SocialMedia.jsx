import React, { useEffect, useRef } from "react"
import "./socialMedia.css"
import { assets } from "../../assets/asset"
import { motion, useScroll, useTransform } from "framer-motion"

const SocialMedia = () => {
	const videoRef = useRef(null)
	const headlineRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			const videoElement = videoRef.current
			const { top } = videoElement.getBoundingClientRect()
			const windowHeight = window.innerHeight

			// Calculate the new width based on the scroll position
			let newWidth = 20 + (90 * (windowHeight - top)) / windowHeight
			newWidth = Math.min(100, Math.max(20, newWidth)) // Constrain between 40% and 100%

			videoElement.style.width = `${newWidth}%`
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const container = useRef(null)

	const { scrollYProgress } = useScroll({
		target: container,

		offset: ["start end", "end start"],
	})

	const sm = useTransform(scrollYProgress, [0, 1], [0, 1000])
	const md = useTransform(scrollYProgress, [0, 1], [0, -550])

	const lg = useTransform(scrollYProgress, [0, 1], [0, -250])

	useEffect(() => {
		const handleScroll = () => {
			const headline = headlineRef.current
			const rect = headline.getBoundingClientRect()

			if (rect.bottom <= window.innerHeight) {
				headline.style.animation = "shrinkAndMove 2s forwards"
			} else {
				headline.style.animation = ""
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div
			ref={container}
			className="socialMedia"
		>
			<div className="socialMedia-container">
				<div className="socialMedia-header">
					<img
						className="socialMedia-img1"
						src={assets.socialMedia_img}
						alt=""
					/>
					<motion.p style={{ y: sm }}>
						In today's digital age, where consumer choices are shaped by online
						interactions, effective digital marketing is essential. At C9 Ads,
						we understand that success requires more than just an online
						presence—it demands a proactive strategy to capitalize on digital
						opportunities. A strong online presence is now a business necessity,
						as every digital touchpoint, from your website to social media, is
						crucial for growth. As a leading digital marketing agency in Perth,
						we offer comprehensive services starting with a thorough analysis of
						your online presence, followed by customized strategies to enhance
						visibility and amplify your brand. Our focus on genuine engagement
						and strategic promotions ensures your brand stands out, highlighting
						your unique selling points to resonate in a crowded marketplace.
					</motion.p>
				</div>
				<div className="socialmedia-subContainer1">
					<div className="socialMedai-bgVideo">
						<video
							ref={videoRef}
							autoPlay
							loop
							muted
						>
							<source
								src={assets.socialMedia_v1}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<p className="socialMedia-content1">
							We optimize your content to rank higher in search engine results,
							enhancing visibility and driving organic traffic.
						</p>
						<div className="socialmedia-videoContent1">
							<motion.div className="socialmedia-videoContent1-left">
								<video
									autoPlay
									muted
								>
									<source
										src={assets.socialMedia_v2}
										type="video/mp4"
									/>
								</video>
								<video
									autoPlay
									muted
									loop
								>
									<source
										src={assets.socialMedia_v3}
										type="video/mp4"
									/>
								</video>
							</motion.div>
							<div className="socialmedia-videoContent1-middle">
								<ul>
									<li>
										<h2>Social Advertising</h2>
										<p>
											Using platforms like Facebook, Instagram, and LinkedIn, we
											strategically position your brand to maximize reach and
											engagement.
										</p>
									</li>
									<li>
										<h2>Content Marketing</h2>
										<p>
											We create and distribute valuable content—from blogs to
											videos—to attract and retain your target audience, driving
											profitable actions.
										</p>
									</li>
									<li>
										<h2>Your Dedicated Digital Partner</h2>
										<p>
											Whether you're a startup or an established business, C9
											Ads is your dedicated digital marketing partner, allowing
											you to focus on running your business.
										</p>
									</li>
								</ul>
							</div>
							<div className="socialmedia-videoContent1-right">
								<video
									autoPlay
									muted
									loop
								>
									<source
										src={assets.socialMedia_v4}
										type="video/mp4"
									/>
								</video>
							</div>
						</div>
						<div className="socialmedia-videoContent2">
							<div className="socialmedia-videoContent2-left">
								<video
									autoPlay
									muted
									loop
								>
									<source
										src={assets.socialMedia_v5}
										type="video/mp4"
									/>
								</video>
								<video
									autoPlay
									muted
									loop
								>
									<source
										src={assets.socialMedia_v6}
										type="video/mp4"
									/>
								</video>
							</div>
							<div className="socialmedia-videoContent2-middle">
								<h2>Our Digital Marketing Process</h2>
								<ul>
									<li>
										<h3>Strategic Branding and Positioning: </h3>
										<p>
											We define a compelling brand identity and strategy based
											on deep industry and competitor analysis for maximum
											impact.
										</p>
									</li>
									<li>
										<h3>Website Optimization and Content Marketing: </h3>
										<p>
											We enhance your website’s design, functionality, and SEO,
											and create engaging content to establish your thought
											leadership.
										</p>
									</li>
									<li>
										<h3>
											Targeted Social Media Campaigns and Digital Advertising:
										</h3>
										<p>
											We execute targeted social media and digital advertising
											campaigns to broaden your reach and engage potential
											customers.
										</p>
									</li>
								</ul>
							</div>
							<div className="socialmedia-videoContent2-right">
								<video
									autoPlay
									muted
									loop
								>
									<source
										src={assets.socialMedia_v7}
										type="video/mp4"
									/>
								</video>
								<video
									autoPlay
									muted
									loop
								>
									<source
										src={assets.socialMedia_v3}
										type="video/mp4"
									/>
								</video>
							</div>
						</div>
						{/* <div className="socialmedia-mediaVideos">
							<div>
								<video
									autoPlay
									muted
								>
									<source
										src={assets.socialMedia_v2}
										type="video/mp4"
									/>
								</video>
								<video
									autoPlay
									muted
									loop
								>
									<source
										src={assets.socialMedia_v3}
										type="video/mp4"
									/>
								</video>
							</div>
							<video
								className="socialmedia-media-v3"
								autoPlay
								muted
								loop
							>
								<source
									src={assets.socialMedia_v4}
									type="video/mp4"
								/>
							</video>
						</div>
						<div className="socialmedia-mediaVideos2">
							<div>
								<video
									autoPlay
									muted
									loop
								>
									<source
										src={assets.socialMedia_v5}
										type="video/mp4"
									/>
								</video>
								<video
									autoPlay
									muted
									loop
								>
									<source
										src={assets.socialMedia_v6}
										type="video/mp4"
									/>
								</video>
							</div>
							<div>
								<video
									autoPlay
									muted
									loop
								>
									<source
										src={assets.socialMedia_v7}
										type="video/mp4"
									/>
								</video>
								<video
									autoPlay
									muted
									loop
								>
									<source
										src={assets.socialMedia_v3}
										type="video/mp4"
									/>
								</video>
							</div>
						</div> */}
					</div>
				</div>
				<div className="socialmedia-mediaContant1">
					<ul>
						<li>
							<h2>Social Advertising</h2>
							<p>
								Using platforms like Facebook, Instagram, and LinkedIn, we
								strategically position your brand to maximize reach and
								engagement.
							</p>
						</li>
						<li>
							<h2>Content Marketing</h2>
							<p>
								We create and distribute valuable content—from blogs to
								videos—to attract and retain your target audience, driving
								profitable actions.
							</p>
						</li>
						<li>
							<h2>Your Dedicated Digital Partner</h2>
							<p>
								Whether you're a startup or an established business, C9 Ads is
								your dedicated digital marketing partner, allowing you to focus
								on running your business.
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="socialmedia-allVideos">
				<video
					autoPlay
					muted
					loop
				>
					<source
						src={assets.socialMedia_v4}
						type="video/mp4"
					/>
				</video>
				<video
					autoPlay
					muted
				>
					<source
						src={assets.socialMedia_v2}
						type="video/mp4"
					/>
				</video>
			</div>

			<div className="socialmedia-mediaContant2">
				<h2>Our Digital Marketing Process</h2>
				<ul>
					<li>
						<h3>Strategic Branding and Positioning: </h3>
						<p>
							We define a compelling brand identity and strategy based on deep
							industry and competitor analysis for maximum impact.
						</p>
					</li>
					<li>
						<h3>Website Optimization and Content Marketing: </h3>
						<p>
							We enhance your website’s design, functionality, and SEO, and
							create engaging content to establish your thought leadership.
						</p>
					</li>
					<li>
						<h3>Targeted Social Media Campaigns and Digital Advertising:</h3>
						<p>
							We execute targeted social media and digital advertising campaigns
							to broaden your reach and engage potential customers.
						</p>
					</li>
				</ul>
			</div>
			<div className="socialmedia-allVideos2">
				<div>
					<video
						autoPlay
						muted
						loop
					>
						<source
							src={assets.socialMedia_v5}
							type="video/mp4"
						/>
					</video>
					<video
						autoPlay
						muted
						loop
					>
						<source
							src={assets.socialMedia_v6}
							type="video/mp4"
						/>
					</video>
				</div>
				<div>
					<video
						autoPlay
						muted
						loop
					>
						<source
							src={assets.socialMedia_v7}
							type="video/mp4"
						/>
					</video>
					<video
						autoPlay
						muted
						loop
					>
						<source
							src={assets.socialMedia_v3}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="socialMedia-connect">
				<div>
					<h1 ref={headlineRef}>Connect With C9 Ads Today</h1>
					<p>
						Ready to transform your digital marketing strategy and see tangible
						results? Connect with C9 Ads today.  Let’s discuss how we can
						elevate your online presence and turn digital channels into pathways
						of growth for your business.
					</p>
				</div>
				<form>
					<label htmlFor="">Company Name</label>
					<input type="text" />
					<label htmlFor="">Email</label>
					<input type="text" />
					<label htmlFor="">Phone</label>
					<input type="text" />
					<label htmlFor="">Message</label>
					<textarea
						name=""
						id=""
						rows={4}
					/>
					<button>Send Message</button>
				</form>
			</div>
		</div>
	)
}

export default SocialMedia
