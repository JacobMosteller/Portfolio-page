import React, { Component } from "react"
import "./Experience.css"
import logo from "./DevLogo.png"

export default class Experience extends Component {
	render() {
		return (
			<div className='Experience'>
				<h1>
					<a name='Experience'>Experience</a>{" "}
				</h1>
				<img src={logo} alt='Devmountain' height='100' />
				<h3>Febuary-September 2019</h3>
			</div>
		)
	}
}
