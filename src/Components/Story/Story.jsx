import React from "react"
import "./story.css"
import { assets } from "../../assets/asset"

const Story = () => {
	return (
		<div className="story">
			<div className="story-container">
				<div className="story-landing">
					<div className="story-landing-text">
						<h1 className="text-journeys">JOURNEYS</h1>
						<div className="story-landing-bottom-text">
							<div>
								<p className="text-boundless">Boundless Stories</p>
								<p className="text-endless">Endless Inspirations</p>
							</div>
							<h1 className="text-in">iN</h1>
							<h1 className="text-ink">INK</h1>
						</div>
					</div>
				</div>
				<div className="story-parallex-content">
					<div className="story-design1">
						<img
							src={assets.studioDesign1}
							alt="studioDesign"
						/>
						<p>
							Step into the vibrant world of C9, a design studio nestled in the
							heart of Australia, where we specialize in crafting captivating
							branding solutions tailored for businesses of all scales. Our
							array of design services spans from crafting iconic logos to
							designing alluring product packaging, aimed at propelling your
							brand to new heights.
						</p>
					</div>
					<div className="story-design2">
						<p>
							Embracing a collaborative ethos, our seasoned designers engage
							closely with clients to unravel their needs, aspirations, and
							brand essence. We recognize that impactful design transcends mere
							aesthetics; it hinges on a profound grasp of marketing dynamics
							and consumer psychology. Thus, we delve deep into researching your
							target demographics and competitive landscape, ensuring that our
							designs not only captivate but also strategically resonate.
						</p>{" "}
						<img
							src={assets.studioDesign2}
							alt="studioDesign"
						/>
					</div>
					<div className="story-design3">
						<img
							src={assets.studioDesign3}
							alt="studioDesign"
						/>
						<p>
							Logo design stands as a cornerstone service, where we appreciate
							the pivotal role of a memorable and cohesive logo in brand
							representation. Our team meticulously crafts logos that mirror
							your brand's ethos, ensuring versatility and instant recognition
							across diverse platforms.
						</p>
					</div>
					<div className="story-design4">
						<p>
							Beyond logos, our expertise extends to crafting enchanting product
							packaging designs that seamlessly blend visual appeal with brand
							narrative. We strive to create packaging that not only catches the
							eye but also narrates your brand's story and unique value
							propositions effectively.
						</p>{" "}
						<img
							src={assets.studioDesign4}
							alt="studioDesign"
						/>
					</div>
					{/* <div className="story-design5"> */}
					<p className="story-designp">
						At C9, we are committed to delivering design excellence that
						surpasses expectations. Our hallmark lies in meticulous attention to
						detail, boundless creativity, and unwavering dedication to client
						satisfaction. Continuously evolving with the latest design trends,
						we stand poised to elevate your brand identity to unparalleled
						heights.
					</p>
					{/* </div> */}
					<div className="story-design6">
						<img
							src={assets.studioDesign5}
							alt="studioDesign"
						/>
						<p>
							If you seek a design partner in Australia who can infuse magic
							into your branding journey, look no further than our passionate
							team of designers. Reach out to us today, and let's embark on a
							transformative design voyage together.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Story
