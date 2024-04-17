import React from "react"
import "./logoWork.css"
import { assets } from "../../assets/asset"
const LogoWork = () => {
	return (
		<div className="logo-work">
			<div className="work-logo">LOGO</div>
			<div className="logo-work-container">
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
				<p className="logo-content1">
					At our design company in Australia, we specialize in crafting logos
					that not only look visually stunning but also convey the core values
					and personality of your brand. Our approach combines creative flair
					with in-depth market research to ensure that every design element
					serves a strategic purpose.
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
				<p className="logo-content2">
					By understanding your target audience and competition, we create logos
					that stand out and resonate with your customers, fostering brand
					recognition and loyalty.
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
				<p className="logo-content3">
					Our experienced team of designers takes a collaborative approach,
					working closely with you to understand your brand's unique identity
					and vision. We believe in the power of simplicity and versatility,
					creating logos that are scalable and work seamlessly across different
					platforms and applications
				</p>
				<div className="logo7">
					<img
						src={assets.logo7}
						alt=""
					/>
					<h2>YOUR DAILY DELIGHTS</h2>
				</div>
				<p className="logo-content4">
					Whether it's a sleek and modern design or a more classic and timeless
					approach, we tailor our creations to suit your brand's specific needs
					and preferences
				</p>
				<p className="logo-content5">
					Beyond just creating logos, we offer comprehensive branding solutions
					that include product packaging design services. We understand the
					importance of cohesive branding across all touchpoints, and our
					designs not only enhance product visibility but also communicate your
					brand's message effectively.
				</p>
			</div>
		</div>
	)
}

export default LogoWork
