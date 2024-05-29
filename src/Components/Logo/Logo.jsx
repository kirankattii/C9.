import React from "react"
import "./logo.css"
import { assets } from "../../assets/asset"
import { motion } from "framer-motion"
import LogoParallax from "./LogoParallax/LogoParallax"

const Logo = () => {
	return (
		<div className="logo2">
			<div className="logo-container">
				<div className="logo-header">
					<motion.h1
						whileInView={{ scale: 1, opacity: 1 }}
						initial={{ scale: 0, opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						LOGO DESIGN
					</motion.h1>
				</div>
				<div className="logo-subContainer1">
					<div className="video-wrapper">
						<video
							autoPlay
							muted
							loop
							// controls
						>
							<source
								src={assets.logo_v1}
								type="video/mp4"
							/>
						</video>
					</div>
					<motion.div
						whileInView={{ scale: 1, opacity: 1, x: 0 }}
						initial={{ scale: 0.94, opacity: 0, x: -50 }}
						transition={{ duration: 0.6 }}
						className="logo-content1"
					>
						<p>
							At C9 Ads, located in the heart of Perth, we specialise in logo
							design as a trusted branding partner in Australia, crafting logos
							that tell your brand's unique story. Understanding that a logo is
							often the first interaction a consumer has with your brand, we
							focus on creating designs that are not only visually compelling
							but also strategically aligned with your brand’s ethos and market
							objectives.
						</p>
						<h2>Logo Design</h2>
						<p>Designing the Face of Your Brand</p>
					</motion.div>
				</div>
				<div className="logo-subContainer2">
					<motion.h1
						whileInView={{ scale: 1, opacity: 1, x: 0 }}
						initial={{ scale: 0.94, opacity: 0, x: -50 }}
						transition={{ duration: 0.4 }}
					>
						Why Effective Logo Design is Crucial?
					</motion.h1>
					<motion.p
						whileInView={{ scale: 1, opacity: 1, x: 0 }}
						initial={{ scale: 0.94, opacity: 0, x: -50 }}
						transition={{ duration: 0.5 }}
					>
						Your logo is more than just a symbol; it’s a communication tool.
						Effective logo design:
					</motion.p>
					<motion.ul
						whileInView={{ scale: 1, opacity: 1, x: 0 }}
						initial={{ scale: 0.94, opacity: 0, x: -50 }}
						transition={{ duration: 0.6 }}
					>
						<li>
							Captures Attention: Makes your brand stand out in a crowded
							marketplace.
						</li>
						<li>
							Communicates Brand Values: Conveys your brand’s story and values
							at a glance.
						</li>
						<li>
							Establishes Brand Recognition: Creates a memorable impression that
							fosters consumer loyalty.
						</li>
					</motion.ul>
				</div>
				<div className="logo-vault">
					<h1>Logo Vault</h1>
				</div>
				<LogoParallax />
				<div className="logo-subContaine3">
					<div>
						<motion.h2
							whileInView={{ scale: 1, opacity: 1, x: 0 }}
							initial={{ scale: 0.94, opacity: 0, x: -50 }}
							transition={{ duration: 0.4 }}
						>
							Start Your Logo Design Journey with C9 Ads
						</motion.h2>
						<motion.p
							whileInView={{ scale: 1, opacity: 1, x: 0 }}
							initial={{ scale: 0.94, opacity: 0, x: -50 }}
							transition={{ duration: 0.6 }}
						>
							Are you ready to give your brand the logo it deserves? Contact C9
							Ads to discover how our dedicated team of designers can transform
							your logo into a powerful brand ambassador. Let's craft a logo
							that not only represents your brand but also captures attention
							and fosters recognition.
						</motion.p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Logo
