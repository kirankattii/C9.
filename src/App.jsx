import React from "react"
import { Routes, Route, useLocation, Router } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
// import Story from "./Components/Story/Story"

import "locomotive-scroll/dist/locomotive-scroll.css"
import Contact from "./Components/Contact/Contact"
import Services from "./Components/Services/Services"

// import LogoWork from "./Components/LogoWork/LogoWork"
// import Packaging from "./Components/Packaging/Packaging"
import Values from "./Components/Values/Values"
import About from "./Components/About/About"
import SubPage1 from "./Components/Home/subpages/SubPage1/SubPage1"
import SubPage2 from "./Components/Home/subpages/subPage2/SubPage2"
import SubPage3 from "./Components/Home/subpages/subPage3/SubPage3"
import SubPage4 from "./Components/Home/subpages/subpage4/subpage4"
import Blog from "./Components/Blog/Blog"
import Packaging2 from "./Components/Packaging/Packaging2"
import Seo from "./Components/Seo/Seo"
import SocialMedia from "./Components/SocialMedia/SocialMedia"
import Web from "./Components/Web/Web"
import Logo from "./Components/Logo/Logo"
import NotFound from "./Components/NotFound/NotFound"

// import LogoWork from "./Components/Work/LogoWork/LogoWork"

const App = () => {
	const location = useLocation()

	// Check if the current location is the Story page
	const isStoryPage = location.pathname === "/story"
	const isLogoWorkPage = location.pathname === "/work"
	const isPackagingPage = location.pathname === "/packaging"
	const isAboutPage = location.pathname === "/about-us"
	// const isNotFound = location.pathname === "*"

	const validPaths = [
		"/",
		"/about-us",
		"/services",
		"/our-service1",
		"/our-service2",
		"/our-service3",
		"/our-service4",
		"/contact",
		"/logo",
		"/packaging2",
		"/seo",
		"/social-media-marketing",
		"/web-development",
		"/values",
		"/blogs",
		"/animate",
	]

	const isNotFound = !validPaths.includes(location.pathname)
	return (
		<div>
			{!isNotFound && <Navbar />}
			<Routes>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="/about-us"
					element={<About />}
				/>
				{/* <Route
					path="/story"
					element={<About />}
				/> */}
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/our-service1"
					element={<SubPage1 />}
				/>
				<Route
					path="/our-service2"
					element={<SubPage2 />}
				/>
				<Route
					path="/our-service3"
					element={<SubPage3 />}
				/>
				<Route
					path="/our-service4"
					element={<SubPage4 />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/logo"
					element={<Logo />}
				/>
				{/* <Route
					path="/packaging"
					element={<Packaging />}
				/> */}
				<Route
					path="/packaging2"
					element={<Packaging2 />}
				/>
				<Route
					path="/seo"
					element={<Seo />}
				/>
				<Route
					path="/social-media-marketing"
					element={<SocialMedia />}
				/>
				<Route
					path="/web-development"
					element={<Web />}
				/>
				<Route
					path="/values"
					element={<Values />}
				/>
				<Route
					path="/blogs"
					element={<Blog />}
				/>

				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>

			{/* {!isStoryPage && <Footer />} */}
			{!isAboutPage && <Footer />}
		</div>
	)
}

export default App
