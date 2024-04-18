import React from "react"
import "./values.css"
import { assets } from "../../assets/asset"

const Values = () => {
	return (
		<div className="values">
			<div className="value-text">
				<img
					src={assets.values_reacangle}
					alt=""
				/>
				<h2>
					CAPTURE <span>OUR</span>
				</h2>
				<h1>FUNDAMENTAL</h1>
				<div>
					<p>
						Fostering connection and resilience through our shared <br />
						<p> values, uniting us for a brighter future</p>
					</p>
					<h2>BELIEFS</h2>
				</div>
			</div>
		</div>
	)
}

export default Values
