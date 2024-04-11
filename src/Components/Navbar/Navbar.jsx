import React, { useEffect, useState } from "react"
import "./navbar.css"
import { assets } from "../../assets/asset"
import { Link } from "react-router-dom"
const Navbar = () => {
	const [sticky, setSticky] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 50 ? setSticky(true) : setSticky(false)
		})
	}, [])

	const [moblieMenu, setMobileMenu] = useState(false)
	const toggleMenu = () => {
		moblieMenu ? setMobileMenu(false) : setMobileMenu(true)
	}

	return (
		<div className="navbar">
			<nav className={`container ${sticky ? "dark-nav" : ""}`}>
				<img
					className="logo"
					src={assets.c9logo}
					alt=""
				/>
				<ul className={moblieMenu ? "" : "hide-mobile-menu "}>
					<li>HOME</li>
					<li>STORY</li>
					<li>WORK</li>
					<li>MENU</li>
					<li>CONTACT</li>
				</ul>
				<img
					src={assets.menu_icon}
					alt=""
					className="menu-icon"
					onClick={toggleMenu}
				/>
			</nav>
		</div>
	)
}

export default Navbar
