import React, { useRef } from "react"
import { assets } from "../../../assets/asset"
import "./parallaxEffect.css"
import { useTransform, useScroll } from "framer-motion"

const ParallaxEffect = () => {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end,start"],
	})
	const y = useTransform(scrollYProgress, [0, 1], [1, 1000])
	return (
		<div className="parallaxEffect">
			<div>
				<img
					src={assets.webpage1}
					alt=""
					// style={{ y }}
				/>
				<img
					src={assets.webpage2}
					alt=""
				/>
				<img
					src={assets.webpage3}
					alt=""
				/>
				<img
					src={assets.webpage4}
					alt=""
				/>
				<img
					src={assets.webpage5}
					alt=""
				/>
				<img
					src={assets.webpage6}
					alt=""
				/>
			</div>
		</div>
	)
}

export default ParallaxEffect
