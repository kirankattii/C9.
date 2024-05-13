import React from "react"
import "./subPage1.css"
import { motion } from "framer-motion"
import { assets } from "../../../../assets/asset"

const SubPage1 = () => {
	return (
		<div className="subpage1">
			{/* <div className="subpage-content1">
				<h2>Scroll Down</h2>
			</div> */}
			<div className="subpage-allContent">
				<div className="subcontent-transforming">
					<motion.div
						initial={{ x: 150, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 3,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
					>
						<h1>Unleash</h1>
						<p>Your Brand Potential</p>
					</motion.div>
					<img
						src={assets.white_rectangle}
						alt=""
					/>
				</div>
				<div className="subcontent-design">
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 150 }}
						transition={{ duration: 0.4, delay: 0.5 }}
					>
						<h1>Ignite</h1>
						<p>Your Social Media Game</p>
					</motion.div>
					<img
						src={assets.white_rectangle}
						alt=""
					/>
				</div>
				<div className="subcontent-code">
					<motion.div
						initial={{ x: -150, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 3,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
					>
						<h1>Maximize</h1>
						<p>Your Social Impact</p>
					</motion.div>
					<img
						src={assets.white_rectangle}
						alt=""
					/>
					<motion.div
						initial={{ x: 150, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 3,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
					>
						<h1>Socialize</h1>
						<p>Your Success Story</p>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default SubPage1
