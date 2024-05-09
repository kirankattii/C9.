import React, { useEffect, useRef } from "react"
import "./packaging.css"
import { assets } from "../../assets/asset"
// import { useTransform, useScroll, motion } from "framer-motion"
import Lenis from "@studio-freight/lenis"
import Footer from "../Footer/Footer"

const Packaging = () => {
	// const container = useRef(null)
	// const { scrollYProgress } = useScroll({
	// 	target: container,
	// 	offset: ["start end", "end start"],
	// })
	// const sm = useTransform(scrollYProgress, [0, 1], [0, 0])

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
		<div className="packaging">
			<div className="packaging-text">PACKAGING</div>
			<div className="packaging-text packaging-text-br">
				PACK <br /> AGING
			</div>
			<div className="packaging-container">
				<div className="package1">
					<img
						src={assets.packaging1}
						alt=""
					/>

					<span>
						<h2>CRUNCH</h2>
						<h3>INTO PERFECTION</h3>
					</span>
				</div>
				<div className="package2">
					<img
						src={assets.packaging2}
						alt=""
					/>{" "}
					<span>
						<h2>INDULGE</h2>

						<h3>IN RICHNESS</h3>
					</span>
				</div>
				<div className="package3">
					<img
						src={assets.packaging3}
						alt=""
					/>
					<span>
						<h2>PURE</h2>
						<h3>REFRESHMENT</h3>
					</span>
				</div>

				<div className="package4">
					<img
						src={assets.packaging4}
						alt=""
					/>
					<span>
						<h2>GRAIN</h2>
						<h3>TO PLATE</h3>
					</span>
				</div>
				<div className="package5">
					<img
						src={assets.packaging5}
						alt=""
					/>
					<span>
						<h2>GOLDEN</h2>
						<h3>CRISP DELIGHTS</h3>
					</span>
				</div>
				<div className="package6">
					<img
						src={assets.packaging6}
						alt=""
					/>
					<span>
						<h2>HYDRATE</h2>

						<h3>YOUR SOUL</h3>
					</span>
				</div>
				<div className="package7">
					<img
						src={assets.packaging8}
						alt=""
					/>
					<span>
						<h2>TIMELESS</h2>
						<h3>TREATS</h3>
					</span>
				</div>
				<div className="package8">
					<img
						src={assets.packaging7}
						alt=""
					/>
					<span>
						<h2>SPICE UP</h2>
						<h3>YOUR BITE</h3>
					</span>
				</div>
				<div className="package-content1">
					<p>
						At C9 Ads, located in the heart of Perth, we specialise in digital
						packaging design as we are the trusted product packaging designing
						company in Australia that tells your product's unique story.
						Understanding that packaging is often the first interaction a
						consumer has with your product, we focus on creating designs that
						are not only visually compelling but also strategically aligned with
						your brand’s ethos and market objectives. Why Effective Packaging
						Design is Crucial. Your packaging is more than just a container;
						it’s a communication tool. Effective packaging design:
					</p>
				</div>
				<div className="package-content2">
					<h4>Captures Attention</h4>
					<p>Makes your product stand out in a crowded marketplace.</p>
				</div>
				<div className="package-content3">
					<h4>Communicates Brand Values</h4>
					<p>Conveys your brand’s story and values at a glance.</p>
				</div>
				<div className="package-content4">
					<h4>Influences Purchasing Decisions</h4>
					<p>Encourages consumers to choose your product over competitors.</p>
				</div>
				<div className="package-content5">
					<h4>Our Design Principles and Process</h4>
					<p>
						At C9 Ads, we adhere to a rigorous design process, guided by
						fundamental design principles including clarity, simplicity,
						honesty, and sustainability. Our process ensures that each packaging
						design is not only aesthetically pleasing but also effective in
						achieving your business goals.
					</p>
				</div>
				<div className="package-content6">
					<h4>Research and Development (R&D)</h4>
					<p>
						Market Analysis: We start by analysing market trends, consumer
						behaviour, and competitive landscapes to ensure your packaging
						design is both relevant and innovative.
					</p>
				</div>
				<div className="package-content7">
					<p>
						Brand Alignment: Our designs begin with a deep dive into your
						brand’s values, target audience, and product features. This ensures
						the packaging design truly represents your brand and appeals to your
						specific market.
					</p>
				</div>
				<div className="package-content8">
					<h4>Concept Development</h4>
					<p>
						Idea Generation: Leveraging insights from the R&D phase, our
						designers brainstorm various design concepts. This creative phase
						explores different styles, colors, and shapes that align with the
						brand’s personality.
					</p>
				</div>
				<div className="package-content9">
					<p>
						Design Drafting: Initial concepts are transformed into detailed
						drafts,
					</p>
				</div>
				<div className="package-content10">
					<h4>Prototyping and Feedback</h4>
					<p>
						Digital Prototypes: We create digital prototypes that allow you to
						visualize the final product in a virtual environment. This step is
						crucial for assessing the design’s impact and functionality.
					</p>
				</div>
				<div className="package-content11">
					<p>
						Client Collaboration: Feedback is integral to our process. We engage
						with you to refine and iterate the designs based on your input and
						consumer insights.
					</p>
				</div>
				<div className="package-content12">
					<h4>Final Design and Delivery</h4>
					<p>
						Design Finalization: Incorporating all feedback, the chosen design
						is refined to perfection, ensuring every element is polished and
						aligned with strategic goals.
						<br />
						<br />
						Artwork Preparation: The final designs are prepared in suitable file
						formats, ready for production by your chosen printer or
						manufacturer.
					</p>
				</div>
			</div>
			<div className="packaging-footer ">
				<Footer />
			</div>
		</div>
	)
}

export default Packaging
