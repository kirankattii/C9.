import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
import Story from "./Components/Story/Story"

import "locomotive-scroll/dist/locomotive-scroll.css"

const App = () => {
	const location = useLocation()

	// Check if the current location is the Story page
	const isStoryPage = location.pathname === "/story"

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
			</Routes>
			{!isStoryPage && <Footer />}
		</div>
	)
}

export default App
