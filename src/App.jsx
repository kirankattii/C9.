import React from "react"
import { Link } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"

const App = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<Footer />
		</div>
	)
}

export default App
