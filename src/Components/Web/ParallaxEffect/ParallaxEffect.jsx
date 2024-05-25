import { useEffect, useRef, useState } from "react"
import styles from "./page.module.scss"
import { assets } from "../../../assets/asset"

import Lenis from "@studio-freight/lenis"
import { useTransform, useScroll, motion } from "framer-motion"

const images = [
	assets.webpage1,
	assets.webpage2,
	assets.webpage3,
	assets.webpage4,
	assets.webpage5,
	assets.webpage6,
]

export default function Home() {
	const gallery = useRef(null)
	const [dimension, setDimension] = useState({ width: 0, height: 0 })

	const { scrollYProgress } = useScroll({
		target: gallery,
		offset: ["start end", "end start"],
	})
	const { height } = dimension
	const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 4.3])
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 5])
	const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5])

	useEffect(() => {
		const lenis = new Lenis()

		const raf = (time) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		const resize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight })
		}

		window.addEventListener("resize", resize)
		requestAnimationFrame(raf)
		resize()

		return () => {
			window.removeEventListener("resize", resize)
		}
	}, [])

	// ==gsap========

	return (
		<main className={styles.main}>
			<div className={styles.spacer}></div>
			<div
				ref={gallery}
				className={styles.gallery}
			>
				<Column
					images={[images[0]]}
					y={y}
				/>
				<Column
					images={[images[1]]}
					y={y2}
				/>
				<Column
					images={[images[2]]}
					y={y3}
				/>
				<Column
					images={[images[3]]}
					y={y4}
				/>
				<Column
					images={[images[4]]}
					y={y5}
				/>
			</div>
			<div className={styles.spacer2}>
				<div className={styles.scrollingText}>
					<h1>Begin Your Digital Transformation Today</h1>
					<h1>Begin Your Digital Transformation Today</h1>
				</div>
			</div>
		</main>
	)
}

const Column = ({ images, y }) => {
	return (
		<motion.div
			className={styles.column}
			style={{ y }}
		>
			{images.map((src, i) => {
				return (
					<div
						key={i}
						className={styles.imageContainer}
					>
						<img
							// src={`/images/${src}`}
							src={src}
							alt="image"
							fill
						/>
					</div>
				)
			})}
		</motion.div>
	)
}
