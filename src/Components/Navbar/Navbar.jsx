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
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen)
	}

	const closeDropdown = () => {
		setDropdownOpen(false)
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
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/story">STORY</Link>
					</li>
					<li
						onMouseEnter={toggleDropdown}
						onMouseLeave={closeDropdown}
					>
						<Link>WORK</Link>
						{dropdownOpen && (
							<div className="dropdown-menu">
								<Link to="/work">Logo</Link>
								<Link to="/packaging">Packaging</Link>
							</div>
						)}
					</li>
					<li>MENU</li>
					<li>
						<Link to="/services">SERVICES</Link>
					</li>
					<li>
						<Link to="/contact">CONTACT</Link>
					</li>
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
