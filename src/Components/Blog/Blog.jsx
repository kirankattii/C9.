import React, { useEffect, useState } from "react"
import "./blog.css"
import { assets } from "../../assets/asset"
import axios from "axios"

const Blog = ({ url }) => {
	const [list, setList] = useState([])
	const [loading, setLoading] = useState(true)

	const fetchList = async () => {
		setLoading(true) // Set loading to true before fetching data
		try {
			const response = await axios.get(`${url}/api/blog/list`)
			if (response.data.success) {
				setList(response.data.data)
			}
		} catch (error) {
			console.error("Error fetching data:", error)
		} finally {
			setLoading(false) // Set loading to false after data fetch completes
		}
	}
	console.log(list)
	useEffect(() => {
		fetchList()
	}, [])

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
				{loading ? (
					<div className="spinner">
						<div className="spin"></div>
					</div>
				) : (
					<div className="blog-content">
						<div className="left-blog-content">
							<div className="leftTop-blog-content">
								<img
									src={`${url}/images/${list[0].image}`}
									alt="Blogging"
								/>
								<div className="blog-left-innerContent">
									<span>{list[0].title}</span>
									<p>{list[0].description}</p>
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
													src={assets.blogProfile1}
													alt="Blog"
												/>
											</a>
											{/* <div class="tooltip1">Smith</div> */}
										</li>
										<li class="icon-content">
											<a
												class="link"
												data-social="pinterest"
												aria-label="Pinterest"
												// href="https://www.pinterest.com/"
											>
												<img
													src={assets.blogProfile2}
													alt=""
												/>
											</a>
											{/* <div class="tooltip1">Smith</div> */}
										</li>
										<li class="icon-content">
											<a
												class="link"
												data-social="dribbble"
												aria-label="Dribbble"
												// href="https://dribbble.com/"
											>
												<img
													src={assets.blogProfile3}
													alt="Blog Image"
												/>
											</a>
											{/* <div class="tooltip1">Smith</div> */}
										</li>
										<li class="icon-content">
											<a
												class="link"
												data-social="telegram"
												aria-label="Telegram"
												// href="https://telegram.org/"
											>
												<img
													src={assets.blogProfile4}
													alt=""
												/>
											</a>
											<div class="tooltip1">Smith</div>
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
										alt="arrow Img"
										className="arrow45"
									/>
									<img
										src={`${url}/images/${list[1].image}`}
										alt="Blog"
									/>
									<div>
										<span>{list[1].title}</span>
										<p>{list[1].description}</p>
									</div>
								</div>
								<div id="div4">
									<h3>READ BLOG</h3>
									<img
										src={`${url}/images/${list[2].image}`}
										alt="AI in Marketing"
									/>
									<div>
										<span>{list[2].title}</span>
										<p>{list[2].description}</p>
									</div>
								</div>
								<div id="div5">
									<img
										src={`${url}/images/${list[4].image}`}
										alt="Journey Mapping"
									/>
									<div>
										<span>{list[4].title}</span>
										<p>{list[4].description}</p>
									</div>
								</div>
								<div id="div6">
									<img
										src={`${url}/images/${list[3].image}`}
										alt="Brand Building Image"
									/>
									<div>
										<span>{list[3].title}</span>
										<p>{list[3].description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Blog
