import React, { Component } from "react"
import "./Dash.css"

export default class Dash extends Component {
	render() {
		return (
			<div className='Dash'>
				<a href='#Home'>
					<div className='home'>Home</div>
				</a>

				<a href='#About'>
					<div className='place'>About</div>
				</a>
				<a href='#Skills'>
					<div className='place'>Skills</div>
				</a>

				<a href='#Experience'>
					<div className='place'>Experience</div>
				</a>

				<a href='#Projects'>
					<div className='place'>Projects</div>
				</a>

				<a href='#Contact'>
					<div className='place'>Contact</div>
				</a>
			</div>
		)
	}
}
