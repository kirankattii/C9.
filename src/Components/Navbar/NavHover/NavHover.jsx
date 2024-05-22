import React from "react"
import "./navHover.css"
import { motion } from "framer-motion"
import { assets } from "../../../assets/asset"
import { useNavigate } from "react-router-dom"

const NavHover = () => {
	const navigate = useNavigate()
	return (
		<div className="navhover">
			<motion.div whileHover={{ scale: 0.85 }}>
				<img
					src={assets.aboutService1}
					alt=""
				/>
				<p>SOCIAL MEDIA MARKETING</p>
			</motion.div>
			<motion.div whileHover={{ scale: 0.85 }}>
				<img
					src={assets.aboutService2}
					alt=""
				/>
				<p>WEB DEVELOPMENT</p>
			</motion.div>
			<motion.div
				whileHover={{ scale: 0.85 }}
				onClick={() => navigate("/seo")}
			>
				<img
					src={assets.aboutService3}
					alt=""
				/>
				<p>SEARCH ENGINE OPTIMIZATION</p>
			</motion.div>
			<motion.div
				whileHover={{ scale: 0.85 }}
				onClick={() => navigate("/work")}
			>
				<img
					src={assets.aboutService4}
					alt=""
				/>
				<p>LOGO DESIGNING</p>
			</motion.div>
			<motion.div
				whileHover={{ scale: 0.85 }}
				onClick={() => navigate("/packaging")}
			>
				<img
					src={assets.aboutService5}
					alt=""
				/>
				<p>PACKAGING DESIGNING</p>
			</motion.div>
		</div>
	)
}

export default NavHover
