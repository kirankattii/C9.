import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
import Story from "./Components/Story/Story"

import "locomotive-scroll/dist/locomotive-scroll.css"
import Contact from "./Components/Contact/Contact"
import Services from "./Components/Services/Services"
import Animate from "./Components/Animate"
import LogoWork from "./Components/LogoWork/LogoWork"
import Packaging from "./Components/Packaging/Packaging"
import Values from "./Components/Values/Values"
// import LogoWork from "./Components/Work/LogoWork/LogoWork"

const App = () => {
	const location = useLocation()

	// Check if the current location is the Story page
	const isStoryPage = location.pathname === "/story"
	const isLogoWorkPage = location.pathname === "/work"
	const isPackagingPage = location.pathname === "/packaging"

	return (
		<div>
			{!isStoryPage && <Navbar />}
			<Routes>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="/story"
					element={<Story />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/work"
					element={<LogoWork />}
				/>
				<Route
					path="/packaging"
					element={<Packaging />}
				/>{" "}
				<Route
					path="/values"
					element={<Values />}
				/>
				<Route
					path="/animate"
					element={<Animate />}
				/>
			</Routes>
			{/* {!isStoryPage && <Footer />} */}
			{!isStoryPage && !isLogoWorkPage && !isPackagingPage && <Footer />}
		</div>
	)
}

export default App
