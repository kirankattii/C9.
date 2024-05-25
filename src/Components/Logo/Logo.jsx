import React from "react"
import "./logo.css"
import { assets } from "../../assets/asset"

import LogoParallax from "./LogoParallax/LogoParallax"

const Logo = () => {
	return (
		<div className="logo2">
			<div className="logo-container">
				<div className="logo-header">
					<h1>LOGO DESIGN</h1>
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
					<div className="logo-content1">
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
					</div>
				</div>
				<div className="logo-subContainer2">
					<h1>Why Effective Logo Design is Crucial?</h1>
					<p>
						Your logo is more than just a symbol; it’s a communication tool.
						Effective logo design:
					</p>
					<ul>
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
					</ul>
				</div>
				<LogoParallax />
				<div className="logo-subContaine3">
					<div>
						<h2>Start Your Logo Design Journey with C9 Ads</h2>
						<p>
							Are you ready to give your brand the logo it deserves? Contact C9
							Ads to discover how our dedicated team of designers can transform
							your logo into a powerful brand ambassador. Let's craft a logo
							that not only represents your brand but also captures attention
							and fosters recognition.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Logo
