import React, { useEffect, useState } from "react"
import "./navbar.css"
import { assets } from "../../assets/asset"
import { Link, useNavigate } from "react-router-dom"
import NavHover from "./NavHover/NavHover"
import { RiArrowDropDownLine } from "react-icons/ri"
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

	const [mediaWorkNavOpen, setMediaWorkNavOpen] = useState(false)
	const toggleMediaWorkNav = () => {
		setMediaWorkNavOpen(!mediaWorkNavOpen)
	}
	// const [showMobileDropdown, setShowMobileDropdown] = useState(false)
	// const toggleMobileDropdown = () => {
	// 	setShowMobileDropdown(!showMobileDropdown)
	// }

	// const handleWorkClick = () => {
	// 	if (window.innerWidth < 600) {
	// 		toggleMobileDropdown()
	// 	}
	// }
	const handleClick = () => {
		window.scrollTo(0, 0)
	}

	const navigate = useNavigate()
	return (
		<div className="navbar">
			<nav className={`container ${sticky ? "dark-nav" : ""}`}>
				<img
					className="logo"
					src={assets.c9logo}
					alt=""
					onClick={() => navigate("/")}
				/>
				<ul className={moblieMenu ? "" : "hide-mobile-menu "}>
					<li
						onClick={() => {
							setMobileMenu(false)
							handleClick()
						}}
					>
						<Link to="/">HOME</Link>
					</li>
					{/* <li onClick={() => setMobileMenu(false)}>
						<Link to="/about-us">ABOUT US</Link>
					</li> */}
					<li
						onClick={() => {
							setMobileMenu(false)
							handleClick()
						}}
					>
						<Link to="/about-us">STORY</Link>
					</li>
					<li
						className="work-nav-link"
						onMouseEnter={toggleDropdown}
						onMouseLeave={closeDropdown}
					>
						<Link>WORK</Link>
						{/* <span className="dropdown-icon">
							<RiArrowDropDownLine />
						</span> */}

						{dropdownOpen && (
							<div className="dropdown-menu">
								<hr />
								{/* <Link to="/work">Logo</Link>
								<Link to="/packaging">Packaging</Link> */}
								<div className="navhover-transition">
									<NavHover />
								</div>
							</div>
						)}
					</li>
					<li
						className="media-work-nav-link"
						onClick={toggleMediaWorkNav}
					>
						<span>WORK</span>
						<span className={mediaWorkNavOpen ? "rotate" : ""}>
							<RiArrowDropDownLine />
						</span>
						{mediaWorkNavOpen && (
							<div className="media-dropdown">
								<Link
									// onClick={() => setMobileMenu(false)}
									to="/work"
								>
									LOGO
								</Link>
								<hr />
								<Link
									// onClick={() => setMobileMenu(false)}
									to="/packaging2"
								>
									PACKAGING
									<hr />
								</Link>
								<Link to="/seo">SEO</Link>
								<hr />

								<Link>Web Development</Link>
								<hr />

								<Link>Social Media Marketing</Link>
								<hr />
							</div>
						)}
					</li>
					<li onClick={() => setMobileMenu(false)}>
						<Link to="/services">SERVICES</Link>
					</li>
					<li
						onClick={() => {
							setMobileMenu(false)
							handleClick()
						}}
					>
						<Link to="/blogs">BLOG</Link>
					</li>
					<li onClick={() => setMobileMenu(false)}>
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
