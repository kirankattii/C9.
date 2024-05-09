import React, { useEffect } from "react"
import "./logoWork.css"
import Lenis from "@studio-freight/lenis"

import { assets } from "../../assets/asset"
import Footer from "../Footer/Footer"
const LogoWork = () => {
	useEffect(() => {
		const lenis = new Lenis()

		lenis.on("scroll", (e) => {
			console.log(e)
		})

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])
	return (
		<div className="logo-work">
			<div className="work-logo">LOGO</div>
			<div className="logo-work-container">
				<p className="logo-content1">
					In a world where first impressions are pivotal, your business’s logo
					acts as the frontline, setting the tone for your brand's identity. At
					C9 Ads, the best logo designing company australia, we understand that
					a logo is not just an artistic symbol but the foundational element
					that embodies your brand’s ethos and communicates its core values to
					the audience. That's why our best logo designing company in Perth is
					tailored to create distinctive, memorable, and meaningful logos that
					resonate with your target market.
				</p>
				<div className="logo1">
					<img
						src={assets.logo1}
						alt="INDULGE IN CRUMBLE logo"
					/>
					<h2>INDULGE IN CRUMBLE</h2>
				</div>
				<div className="logo2">
					<img
						src={assets.logo2}
						alt="BITE INTO FLAVOR logo"
					/>
					<h2>BITE INTO FLAVOR</h2>
				</div>
				<p className="logo-content2">
					Why Invest in Professional Logo Design? Make Your Mark: <br /> The
					right logo leaves a lasting impression, often being the first point of
					engagement with your customers. It's an opportunity to instantly
					convey the professional excellence and unique character of your brand.
					Build Trust and Credibility: A professionally designed logo reflects a
					commitment to your brand’s standards and ethics, fostering trust among
					your customers.
				</p>
				<div className="logo3">
					<img
						src={assets.logo3}
						alt=""
					/>
					<h2>FRESH FINDS</h2>
				</div>
				<div className="logo4">
					<img
						src={assets.logo4}
						alt=""
					/>
					<h2>YOUR DAILY DELIGHTS</h2>
				</div>
				<p className="logo-content3">
					Differentiation: In a competitive market, a well-designed logo can set
					you apart, making your brand easily recognizable and superior to your
					competitors.
				</p>
				<div className="logo5">
					<img
						src={assets.logo5}
						alt=""
					/>
					<h2>YOUR DAILY DELIGHTS</h2>
				</div>
				<div className="logo6">
					<img
						src={assets.logo6}
						alt=""
					/>
					<h2>YOUR DAILY DELIGHTS</h2>
				</div>
				<p className="logo-content4">
					Silent Ambassador: Your logo communicates your brand’s story, values,
					and professionalism silently but effectively. Our Unique Approach to
					Logo Design
				</p>
				<div className="logo7">
					<img
						src={assets.logo7}
						alt=""
					/>
					<h2>YOUR DAILY DELIGHTS</h2>
				</div>
				<p className="logo-content5">
					At C9 Ads, we don’t just create logos; we create icons of brand
					identity. Our immersive logo design process involves understanding
					your business's heart and soul.
				</p>
				<div className="logo-content6">
					<h3>OUR PROCESS</h3>
					<ol>
						<li>
							Discover & Research: We start by getting to know your business,
							industry, and competitors. This phase is all about understanding
							your brand’s mission, vision, and unique selling propositions.
						</li>
						<li>
							Concept Development: With insights gained from our research, our
							creative team begins the design phase. We explore various design
							elements, experimenting with fonts, colours, and symbols to
							develop concepts that visually represent your brand.
						</li>
					</ol>
					<span>
						Refinement and Finalisation: Collaborating closely with you, we
						refine our concepts based on your feedback. This iterative process
						ensures that the final logo perfectly aligns with your brand
						identity and business objectives. Once finalized, we optimize the
						logo across various media and formats to ensure consistency and
						quality everywhere your brand appears.
					</span>
				</div>
				{/* <div> */}
				<p className="logo-content7">
					Invest in Your Brand’s Visual Identity <br /> Your logo is more than
					just a graphic; it is a declaration of your brand’s quality, culture,
					and character. Invest in C9 Ads’ Logo Design Service and let us help
					you build a visual identity that not only stands out in the Australian
					market but also resonates globally. Embrace a logo that’s not just
					seen but remembered.
				</p>
				{/* </div> */}
				<div className="logo-content8">
					<h3>Connect With Us Today</h3>
					<span>
						Ready to make your brand unforgettable? Connect with C9 Ads today,
						and let’s start the journey to a remarkable brand identity together.
						Fill out the contact form below or give us a call to discuss how we
						can transform your logo into a powerful emblem of your business.
						[Contact Form Integration with fields for Name, Email, Mobile,
						Business Name, Website, and a section for additional queries]
					</span>
				</div>
			</div>
			<div className="logo-footer">
				<Footer />
			</div>
		</div>
	)
}

export default LogoWork
