import React from "react"
import "./blog.css"
import { assets } from "../../assets/asset"

const Blog = () => {
	return (
		<div className="blog">
			<div className="blog-container">
				<div className="blog-header">
					<div className="blog-text">
						<h1>Navigating</h1>
						<h2>the Digital Landscape</h2>
						<h3>Expert Insights into Marketing Trends</h3>
					</div>
				</div>
				<div className="blog-content">
					<div className="left-blog-content">
						<div className="leftTop-blog-content">
							<img
								src={assets.grid}
								alt=""
							/>
							<div className="blog-left-innerContent">
								<span>
									Influencer Marketing: Authentic Connections, Real Results
								</span>
								<p>
									Discover the power of influencer partnerships in building
									genuine brand connections. Learn to choose the right
									influencers, collaborate authentically, measure ROI, and
									maintain ethical practices for long-term success
								</p>
							</div>
						</div>
						<div>
							<h2 className="Top-Wordsmiths">Top Wordsmiths</h2>
							<main>
								<ul class="example-1">
									<li class="icon-content">
										<a
											class="link"
											data-social="spotify"
											aria-label="Spotify"
											// href="https://www.spotify.com/"
										>
											<img
												src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
											/>
										</a>
										<div class="tooltip">Smith</div>
									</li>
									<li class="icon-content">
										<a
											class="link"
											data-social="pinterest"
											aria-label="Pinterest"
											// href="https://www.pinterest.com/"
										>
											<img
												src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
												alt=""
											/>
										</a>
										<div class="tooltip">Smith</div>
									</li>
									<li class="icon-content">
										<a
											class="link"
											data-social="dribbble"
											aria-label="Dribbble"
											// href="https://dribbble.com/"
										>
											<img
												src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
											/>
										</a>
										<div class="tooltip">Smith</div>
									</li>
									<li class="icon-content">
										<a
											class="link"
											data-social="telegram"
											aria-label="Telegram"
											// href="https://telegram.org/"
										>
											<img
												src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
												alt=""
											/>
										</a>
										<div class="tooltip">Smith</div>
									</li>
								</ul>
							</main>
						</div>
					</div>
					<div className="right-blog-content">
						<div id="cssportal-grid">
							<div id="div1">
								<img
									src={assets.arrow45}
									alt=""
									className="arrow45"
								/>
								<img
									src={assets.grid1}
									alt=""
								/>
								<div>
									<span>Video Marketing Mastery</span>
									<p>
										Discover how video marketing drives engagement and
										conversions. Learn about different video types, storytelling
										techniques, and platform optimizations to maximize your
										marketing impact.
									</p>
								</div>
							</div>
							<div id="div4">
								<h3>READ BLOG</h3>
								<img
									src={assets.grid2}
									alt=""
								/>
								<div>
									<span>AI in Marketing</span>
									<p>Leveraging Machine Learning for Personalization</p>
								</div>
							</div>
							<div id="div5">
								<img
									src={assets.grid4}
									alt=""
								/>
								<div>
									<span>Customer Journey Mapping</span>
									<p>Customer Journey Mapping</p>
								</div>
							</div>
							<div id="div6">
								<img
									src={assets.grid3}
									alt=""
								/>
								<div>
									<span>Brand Building in the Digital Age</span>
									<p>Brand Building in the Digital Age</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog
