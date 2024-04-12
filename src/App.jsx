import React from "react"
import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
import Story from "./Components/Story/Story"

const App = () => {
	return (
		<div>
			<Navbar />
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
			<Footer />
		</div>
	)
}

export default App
