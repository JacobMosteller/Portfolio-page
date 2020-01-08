import React, { Component } from "react"
import "./Projects.css"
import wedd from "./wedd.png"
import health from "./health.png"

export default class Projects extends Component {
	render() {
		return (
			<div className='Projects'>
				<h1>
					<a name='Projects'>Projects</a>
				</h1>
				<div className='Health'>
					<a target='_blank' href='https://healthy-home.herokuapp.com/'>
						<img src={health} alt='Healty home' height='200' />
					</a>

					<p>Healthy home</p>
				</div>
				<div className='Wed'>
					<a target='_blank' href='https://myweddingwebsite.herokuapp.com/'>
						<img src={wedd} alt='Wedding site' height='200' />
					</a>

					<p>Wedding site</p>
				</div>
			</div>
		)
	}
}

//https://healthy-home.herokuapp.com/
//https://myweddingwebsite.herokuapp.com/
