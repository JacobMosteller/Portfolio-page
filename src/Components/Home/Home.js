import React, { Component } from "react"
import "./Home.css"
import profile from "./profile.jpg"

export default class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<a name='Home'>
					<h2>I'm Jacob.</h2>
				</a>
				<div>
					<img src={profile} alt='profile' height='400' className='pic' />
					<h5>Software/Web Developer</h5>
				</div>

				<h3></h3>
			</div>
		)
	}
}
