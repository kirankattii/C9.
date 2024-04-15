import React from "react"
import "./contact.css"
const Contact = () => {
	return (
		<div className="contact">
			<div className="contact-container">
				<div className="contact-header">
					<div className="contact-text">
						<h1 className="text-get">GET</h1>
						<div>
							<h1 className="text-contact-in">iN</h1>
							<h1 className="text-touch">TOUCH</h1>
						</div>
						<div className="contact-help-card">
							<h2>We're Here to Help!</h2>
							<p>
								Reach out to us for expert support and personalized solutions.
								We're ready to listen and guide you towards achieving your
								digital marketing goals. Connect with our team today!
							</p>
						</div>
					</div>
					<div className="contact-address-form">
						<div className="contact-address">
							<div className="contact-our-address">
								<div className="contact-two-address">
									<div className="contact-address-one">
										<div>
											<h2>Akshtam Maini</h2>
											<span>Business Head, Australia</span>
										</div>
										<div>
											<h3>Visit Us</h3>
											<p>
												29, Armstrong Road, Wilson, Perth, <br />
												WA 6107
											</p>
										</div>
										<div>
											<h3>Chat To Us</h3>
											<p>Business@c9ads.com</p>
										</div>
										<div>
											<h3>Contact To Us</h3>
											<p>+61 456469643</p>
										</div>
									</div>
									<div className="contact-address-two">
										<div>
											<h2>Manik Kalra</h2>
											<span>Business Head, United Kingdom</span>
										</div>
										<div>
											<h3>Visit Us</h3>
											<p>
												Bakers Place, Woodley, Reading,
												<br /> RG5 4AX
											</p>
										</div>
										<div>
											<h3>Chat To Us</h3>
											<p>Business@c9ads.com</p>
										</div>
										<div>
											<h3>Contact To Us</h3>
											<p>+44 (0)7425819099</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="contact-form">
							<div>
								<div>
									<label htmlFor="">First Name</label>
									<input type="text" />
								</div>
								<div>
									<label htmlFor="">Last Name</label>
									<input type="text" />
								</div>
							</div>
							<div>
								<label htmlFor="">Company Name</label>
								<input type="text" />
							</div>
							<div>
								<label htmlFor="">Email Address</label>
								<input type="email" />
							</div>
							<div>
								<label htmlFor="">Message</label>
								<textarea
									cols="30"
									rows="10"
								></textarea>
							</div>
						</div>
					</div>
				</div>
				<div className="share-your-contact"></div>
			</div>
		</div>
	)
}

export default Contact
