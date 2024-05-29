import React from "react"
import "./navHover.css"
import { motion } from "framer-motion"
import { assets } from "../../../assets/asset"
import { useNavigate } from "react-router-dom"

const NavHover = () => {
	const navigate = useNavigate()
	return (
		<div className="navhover">
			<motion.div
				whileHover={{ scale: 0.85 }}
				onClick={() => navigate("/social-media-marketing")}
			>
				<img
					src={assets.aboutService1}
					alt="SOCIAL MEDIA MARKETING"
				/>
				<p>SOCIAL MEDIA MARKETING</p>
			</motion.div>
			<motion.div
				whileHover={{ scale: 0.85 }}
				onClick={() => navigate("/web-development")}
			>
				<img
					src={assets.aboutService2}
					alt="WEB DEVELOPMENT"
				/>
				<p>WEB DEVELOPMENT</p>
			</motion.div>
			<motion.div
				whileHover={{ scale: 0.85 }}
				onClick={() => navigate("/seo")}
			>
				<img
					src={assets.aboutService3}
					alt="SEARCH ENGINE OPTIMIZATION"
				/>
				<p>SEARCH ENGINE OPTIMIZATION</p>
			</motion.div>
			<motion.div
				whileHover={{ scale: 0.85 }}
				onClick={() => navigate("/logo")}
			>
				<img
					src={assets.aboutService4}
					alt="LOGO DESIGNING"
				/>
				<p>LOGO DESIGNING</p>
			</motion.div>
			<motion.div
				whileHover={{ scale: 0.85 }}
				onClick={() => navigate("/packaging2")}
			>
				<img
					src={assets.aboutService5}
					alt="PACKAGING DESIGNING"
				/>
				<p>PACKAGING DESIGNING</p>
			</motion.div>
		</div>
	)
}

export default NavHover
