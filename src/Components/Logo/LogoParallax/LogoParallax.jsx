import { useEffect, useRef, useState } from "react"
import styles from "./page.module.scss"
import { assets } from "../../../assets/asset"

import Lenis from "@studio-freight/lenis"
import { useTransform, useScroll, motion } from "framer-motion"

const images = [
	assets.logos1,
	assets.logos2,
	assets.logos3,
	assets.logos4,
	assets.logos5,
	assets.logos6,
	assets.logos7,
	assets.logos8,
	assets.logos9,
	assets.logos10,
	assets.logos11,
	assets.logos12,
	assets.logos13,
	assets.logos14,
	assets.logos15,
	assets.logos16,
	assets.logos17,
	assets.logos18,
	assets.logos19,
	assets.logos20,
	assets.logos21,
	assets.logos22,
	assets.logos23,
	assets.logos24,
	assets.logos25,
	assets.logos26,
	assets.logos27,
	assets.logos28,
	assets.logos29,
	assets.logos30,
	assets.logos31,
	assets.logos32,
	assets.logos33,
	assets.logos34,
	assets.logos35,
	assets.logos36,
	assets.logos37,
	assets.logos38,
	assets.logos39,
	assets.logos40,
	assets.logos41,
	assets.logos42,
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
	const y6 = useTransform(scrollYProgress, [0, 1], [0, height * 5.5])

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
			{/* <div className={styles.spacer}></div> */}
			<div
				ref={gallery}
				className={styles.gallery}
			>
				<Column
					images={[
						images[0],
						images[0],
						images[7],
						images[3],
						images[4],
						images[10],
						images[8],
						images[7],
						images[8],
						images[9],
						images[10],
					]}
					y={y}
				/>
				<Column
					images={[
						images[11],
						images[12],
						images[20],
						images[14],
						images[19],
						images[16],
						images[18],
						images[18],
						images[19],
						images[20],
						images[10],
					]}
					y={y2}
				/>
				<Column
					images={[
						images[21],
						images[22],
						images[23],
						images[24],
						images[21],
						images[26],
						images[27],
						images[28],
						images[29],
						images[30],
						images[24],
					]}
					y={y3}
				/>
				<Column
					images={[
						images[18],
						images[32],
						images[33],
						images[34],
						images[35],
						images[33],
						images[11],
						images[29],
						images[39],
						images[19],
						images[17],
					]}
					y={y4}
				/>
				<Column
					images={[
						images[0],
						images[1],
						images[12],
						images[3],
						images[8],
						images[41],
						images[24],
						images[15],
						images[25],
						images[25],
						images[8],
					]}
					y={y5}
				/>
				<Column
					images={[
						images[0],
						images[1],
						images[38],
						images[9],
						images[4],
						images[40],
						images[6],
						images[37],
						images[38],
						images[40],
						images[8],
					]}
					y={y6}
				/>
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
							alt="Logos"
							fill
						/>
					</div>
				)
			})}
		</motion.div>
	)
}
