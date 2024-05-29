import React from "react"
import "./provideCoa.css"
import { assets } from "../../../assets/asset"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

const ProvideCoa = () => {
	const defaultOptions = {
		reverse: false, // reverse the tilt direction
		max: 35, // max tilt rotation (degrees)
		perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
		scale: 1.03, // 2 = 200%, 1.5 = 150%, etc..
		speed: 1000, // Speed of the enter/exit transition
		transition: true, // Set a transition on enter/exit.
		axis: null, // What axis should be disabled. Can be X or Y.
		reset: true, // If the tilt effect has to be reset on exit.
		easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
	}
	return (
		<div className="provideCoa">
			<div className="provideCoa-container">
				<div className="providecoa-banner">
					<div>
						<h2>WE PROVIDE COA</h2>
						<p>
							The Certificate of Original Artwork serves as a powerful protector
							for your design. It proclaims, "This is uniquely yours!" and
							safeguards your creative efforts from potential plagiarism. This
							certificate acts as a robust legal shield, providing concrete
							proof of your ownership and offering defence against imitators.
							With this essential document, you can confidently register your
							design, affirming its authenticity and securing your artistic
							expression.
						</p>
					</div>
					<Tilt
						options={defaultOptions}
						style={{}}
					>
						<img
							src={assets.certigicate_coa}
							alt="certigicate Image"
						/>
					</Tilt>
				</div>
				<div className="providecoa-cards">
					<motion.div
						className="providecoa-orangeCards"
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: -100 }}
						transition={{ duration: 0.4, delay: 0 }}
					>
						<h3>Provenance Verification</h3>
						<img
							src={assets.proenance_verification}
							alt="proenance verification"
						/>
						<p>
							A COA provides detailed information about the artwork, including
							its origin, history, and previous ownership. This documentation
							helps verify the authenticity of the artwork and assures buyers of
							its legitimate origin.
						</p>
					</motion.div>
					<motion.div
						className="providecoa-whiteCards"
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: -100 }}
						transition={{ duration: 0.4, delay: 0.1 }}
					>
						<h3>Increased Value</h3>

						<img
							src={assets.increased_Value}
							alt="increased Value"
						/>

						<p>
							Artworks accompanied by a COA often have higher market value and
							are more attractive to collectors and investors. The documented
							authenticity and provenance provided by the COA add credibility
							and trustworthiness to the artwork, leading to increased value
							over time.
						</p>
					</motion.div>
					<motion.div
						className="providecoa-orangeCards"
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: -100 }}
						transition={{ duration: 0.4, delay: 0.2 }}
					>
						<h3>Legal Protection</h3>
						<img
							src={assets.legal_protection}
							alt="Legal Protection"
						/>
						<p>
							In case of disputes regarding the authenticity or ownership of an
							artwork, a COA can serve as crucial evidence to support the claims
							of the rightful owner. It provides legal protection by
							establishing a clear chain of ownership and authentication.
						</p>
					</motion.div>
					<motion.div
						className="providecoa-whiteCards"
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: -100 }}
						transition={{ duration: 0.4, delay: 0.3 }}
					>
						<h3>Collector Confidence</h3>
						<img
							src={assets.collector_Confidence}
							alt="Collector Confidence"
						/>
						<p>
							For art collectors, having a COA enhances their confidence in the
							artwork's authenticity and investment value. It offers peace of
							mind knowing that the artwork has been verified by experts and
							comes with documented proof of its originality and history.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default ProvideCoa
