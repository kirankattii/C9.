import React from "react"
import { motion } from "framer-motion"

const Animate = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				color: "#000",
				paddingTop: "25vh",
			}}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				I have some content here
			</motion.div>
		</div>
	)
}

export default Animate
