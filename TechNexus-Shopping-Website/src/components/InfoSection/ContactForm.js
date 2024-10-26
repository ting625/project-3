import React, { useState, useEffect } from 'react';

function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	// useEffect to log the state change after it updates
	useEffect(() => {
		if (submitted) {
			console.log("Submitted state:", submitted);
		}
	}, [submitted]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted!"); // Log on form submit
		setSubmitted(true); // Set submission state to true on successful submission
	};

	return (
		<div>
			{submitted ? (
				<p>Sign up successfully!</p>
			) : (
				<form
					name="contact v1"
					method="POST"
					action="/" // Optional for local testing; can remove for Netlify
					onSubmit={handleSubmit}
					data-netlify-honeypot="bot-field"
				>
					<input type="hidden" name="form-name" value="contact v1" />

					<div hidden>
						<input name="bot-field" />
					</div>

					<div>
						<label>
							Name<br />
							<input type="text" name="name" required />
						</label>
					</div>

					<div>
						<label htmlFor="email">Email</label><br />
						<input id="email" type="email" name="email" required />
					</div>

					<div>
						<label>
							Message<br />
							<textarea name="comments" required></textarea>
						</label>
					</div>

					<button 
						type="submit"
						onClick={() => console.log("Button clicked")} // Log to confirm button click
					>
						Send Message
					</button>
				</form>
			)}
		</div>
	);
}

export default ContactForm;
