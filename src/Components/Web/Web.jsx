import React from "react"
import "./web.css"
import ParallaxEffect from "./ParallaxEffect/ParallaxEffect"

const Web = () => {
	return (
		<div className="web">
			<div className="web-container">
				<div className="web-header">
					<h1>Transform Your Online Presence with Expert Web Development</h1>
					<h3>Building Digital Experiences, One Pixel at a Time.</h3>
					<p>Elevate Your Digital Impact</p>
				</div>
				<ParallaxEffect />
			</div>
		</div>
	)
}

export default Web
