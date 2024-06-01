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

	const getImageUrl = (item) => {
		return item && item.image ? `${url}/images/${item.image}` : null
	}

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
									src={getImageUrl(list[0]) || assets.placeholderImage}
									alt="Blogging"
								/>
								<div className="blog-left-innerContent">
									<span>{list[0]?.title || "No Title Available"}</span>
									<p>{list[0]?.description || "No Description Available"}</p>
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
										src={getImageUrl(list[1]) || assets.placeholderImage}
										alt="Blog"
									/>
									<div>
										<span>{list[1]?.title || "No Title Available"}</span>
										<p>{list[1]?.description || "No Description Available"}</p>
									</div>
								</div>
								<div id="div4">
									<h3>READ BLOG</h3>
									<img
										src={getImageUrl(list[2]) || assets.placeholderImage}
										alt="AI in Marketing"
									/>
									<div>
										<span>{list[2]?.title || "No Title Available"}</span>
										<p>{list[2]?.description || "No Description Available"}</p>
									</div>
								</div>
								<div id="div5">
									<img
										src={getImageUrl(list[4]) || assets.placeholderImage}
										alt="Journey Mapping"
									/>
									<div>
										<span>{list[4]?.title || "No Title Available"}</span>
										<p>{list[4]?.description || "No Description Available"}</p>
									</div>
								</div>
								<div id="div6">
									<img
										src={getImageUrl(list[3]) || assets.placeholderImage}
										alt="Brand Building Image"
									/>
									<div>
										<span>{list[3]?.title || "No Title Available"}</span>
										<p>{list[3]?.description || "No Description Available"}</p>
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
