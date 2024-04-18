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
				<div
					// style={{ y: sm }}
					className="package1"
				>
					<img
						// style={{ y: sm }}
						src={assets.packaging1}
						alt=""
					/>
					{/* <hr /> */}

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
			</div>
			<div className="packaging-footer ">
				<Footer />
			</div>
		</div>
	)
}

export default Packaging
