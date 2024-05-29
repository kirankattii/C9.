import React from "react"
import "./seo.css"
import { assets } from "../../assets/asset"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
// import { motion } from "framer-motion"

const Seo = () => {
	const defaultOptions = {
		reverse: false,
		max: 25,
		perspective: 1000,
		scale: 1.03,
		speed: 100,
		transition: true,
		axis: null,
		reset: true,
		easing: "cubic-bezier(.03,.98,.52,.99)",
	}
	return (
		<div className="seo">
			<div className="seo-container">
				<div className="seo-header">
					<motion.h2
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.4 }}
					>
						SEO Services at C9 Ads: <br /> Elevating Your Digital Presence
					</motion.h2>
					<motion.hr
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5 }}
					/>
					<motion.p
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.6 }}
					>
						<span> Unlock Your Website's Potential with Expert SEO </span> At C9
						Ads, we understand that visibility is paramount in the digital
						landscape. That's why our SEO services are not just about improving
						rankings; they're about opening doors to increased visibility,
						engagement, and conversions. Located in Perth, C9 Ads, the best
						search engine optimization company Perth is committed to propelling
						your business to the forefront of search engines, where most
						customers start their online journey.
					</motion.p>
				</div>
				<div className="seo-subContainer1">
					<motion.p
						whileInView={{ scale: 1, opacity: 1 }}
						initial={{ scale: 0.92, opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						<span>Comprehensive SEO Strategy Tailored for You </span> <br />
						SEO is no longer just about keywords and backlinks. It's about
						creating a seamless, user-friendly experience that attracts and
						retains users. We use white hat SEO for organic traffic as we are
						the professional and best search engine optimization company in
						australia. Our holistic approach to SEO integrates:
					</motion.p>
					<div>
						<Tilt options={defaultOptions}>
							<img
								src={assets.se0_img1}
								alt="SEO"
							/>
						</Tilt>
						<ul>
							<motion.li
								whileInView={{ scale: 1, opacity: 1 }}
								initial={{ scale: 0.92, opacity: 0 }}
								transition={{ duration: 0.4 }}
							>
								<span>Technical SEO: </span>
								<p>
									We lay the foundation by enhancing the technical elements of
									your site—speed, mobile responsiveness, URL structure, and
									crawlability are just the beginning.
								</p>
							</motion.li>
							<motion.li
								whileInView={{ scale: 1, opacity: 1 }}
								initial={{ scale: 0.91, opacity: 0 }}
								transition={{ duration: 0.6 }}
							>
								<span>Content Strategy: </span>
								<p>
									Through compelling, keyword-rich content, we enhance your
									site's relevance and authority.
								</p>
							</motion.li>
							<motion.li
								whileInView={{ scale: 1, opacity: 1 }}
								initial={{ scale: 0.9, opacity: 0 }}
								transition={{ duration: 0.8 }}
							>
								<span>Off-Page Strategy: </span>
								<p>
									We boost your site's authority through strategic backlinking
									from relevant and reputable sources.
								</p>
							</motion.li>
						</ul>
					</div>
				</div>
				<div className="seo-subContainer2">
					<motion.h2
						whileInView={{ scale: 1, opacity: 1 }}
						initial={{ scale: 0.95, opacity: 0 }}
						transition={{ duration: 0.6 }}
					>
						Our SEO Process: Detailed, Dynamic, and Data-Driven
					</motion.h2>
					<motion.p
						whileInView={{ scale: 1, opacity: 1, x: 0 }}
						initial={{ scale: 0.94, opacity: 0, x: -50 }}
						transition={{ duration: 0.4 }}
					>
						<span> SEO Audit & Research</span> <br />
						Every successful SEO strategy begins with a thorough audit and
						detailed research. Our team dives deep into your website’s current
						standing, analyzing everything from site architecture to content
						relevance and technical setup. This comprehensive evaluation helps
						us pinpoint areas for enhancement and identify opportunities.
						Coupled with extensive keyword research that assesses market trends,
						competitor strategies, and audience intent, our foundation is set to
						tailor a strategy that targets your specific market effectively.
					</motion.p>
					<motion.p
						whileInView={{ scale: 1, opacity: 1, x: 0 }}
						initial={{ scale: 0.94, opacity: 0, x: -50 }}
						transition={{ duration: 0.5 }}
					>
						<span> SEO Planning </span>
						<br />
						With insights from our initial audits, we develop a strategic SEO
						plan aligned with your business objectives. This plan includes
						detailed keyword strategies, content recommendations, and technical
						improvements that ensure your website aligns perfectly with search
						engine algorithms. Our strategic planning is your roadmap to
						improved rankings and enhanced online visibility.
					</motion.p>
					<motion.p
						whileInView={{ scale: 1, opacity: 1, x: 0 }}
						initial={{ scale: 0.94, opacity: 0, x: -50 }}
						transition={{ duration: 0.6 }}
					>
						<span>SEO Implementation & Analysis</span>
						<br /> Implementation is where strategies come to life. Our team
						meticulously applies on-page and off-page optimizations, from
						refining meta tags and headers to executing backlink strategies.
						Post-implementation, we shift into continuous analysis mode, using
						advanced analytics to monitor the site’s performance against key
						metrics like traffic, engagement, and conversion rates. This ongoing
						analysis helps us refine and adjust strategies to keep up with
						changing algorithms and market dynamics.
					</motion.p>
					<div className="choose-seo">
						<motion.h1
							whileInView={{ scale: 1, opacity: 1, x: 0 }}
							initial={{ scale: 0.95, opacity: 0, x: -50 }}
							transition={{ duration: 0.4 }}
						>
							Why Choose C9 Ads for SEO?
						</motion.h1>
						<motion.ul
							whileInView={{ scale: 1, opacity: 1, x: 0 }}
							initial={{ scale: 0.94, opacity: 0, x: -50 }}
							transition={{ duration: 0.6 }}
						>
							<li>
								Results-driven: We focus on achieving measurable improvements in
								your site traffic and search rankings.
							</li>
							<li>
								Experience and Expertise: Our team is skilled in the latest SEO
								techniques and backed by years of experience in diverse
								industries.
							</li>
							<li>
								Custom Solutions: We recognize that each business is unique. Our
								strategies are customized to meet your specific needs and goals.
							</li>
						</motion.ul>
					</div>
					<div className="seo-images">
						<motion.img
							whileInView={{ scale: 1, opacity: 1 }}
							initial={{ scale: 0, opacity: 0 }}
							transition={{ duration: 0.4 }}
							src={assets.seo_img2}
							alt="SEO"
						/>
						<motion.img
							whileInView={{ scale: 1, opacity: 1 }}
							initial={{ scale: 0, opacity: 0 }}
							transition={{ duration: 0.6 }}
							src={assets.seo_img3}
							alt="SEO"
						/>
						<motion.img
							whileInView={{ scale: 1, opacity: 1 }}
							initial={{ scale: 0, opacity: 0 }}
							transition={{ duration: 0.8 }}
							src={assets.seo_img4}
							alt="SEO"
						/>
					</div>
					<div className="elevateBrandWithC9">
						<motion.h3
							whileInView={{ scale: 1, opacity: 1, x: 0 }}
							initial={{ scale: 0.94, opacity: 0, x: -50 }}
							transition={{ duration: 0.6 }}
						>
							Elevate Your Brand with C9 Ads{" "}
						</motion.h3>
						<motion.p
							whileInView={{ scale: 1, opacity: 1, x: 0 }}
							initial={{ scale: 0.94, opacity: 0, x: -50 }}
							transition={{ duration: 0.6 }}
						>
							Investing in SEO with C9 Ads means choosing a partner dedicated to
							your success. Ready to dominate the first page of Google and turn
							searches into conversions? Let’s connect and transform your online
							presence into your most powerful asset
						</motion.p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Seo
