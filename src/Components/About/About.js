import React, { Component } from "react"
import "./About.css"

export default class About extends Component {
	render() {
		return (
			<div className='About'>
				<h1>
					<a name='About'>About Me</a>
				</h1>

				<div className='me'>
					<p>I'm 21</p>
					<br />
					<p>I have a wife and a 1 year old child</p>
					<br />
					<p>My hobbys include:</p>
					<p>Film</p>
					<p>Technology</p>
					<p>Video Games</p>
					<p>Virtual Reality</p>
				</div>
			</div>
		)
	}
}
