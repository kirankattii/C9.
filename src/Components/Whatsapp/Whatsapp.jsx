import React from "react"
import whatsapp_icon from "../../assets/whatsapp-social-media-svgrepo-com.svg"
import "./whatsapp.css"
const Whatsapp = () => {
	return (
		<div className="whatsapp">
			<a
				href="https://wa.me/9113099868"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={whatsapp_icon}
					alt="Whatsapp Icon"
				/>
				<span className="tooltip">WhatsApp</span>
			</a>
		</div>
	)
}

export default Whatsapp
