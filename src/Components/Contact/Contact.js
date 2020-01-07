import React, { Component } from "react"
import "./Contact.css"
import githuby from "./GitHub-Logo.png"
import linky from "./linkedin.png"
import insta from "./insta.png"

export default class Contact extends Component {
	render() {
		return (
			<div className='Contact'>
				<h1 className='center'>
					<a name='Contact'>Contact</a>
				</h1>
				<h4>Email: jacobmosteller722@gmail.com</h4>
				<h4>Phone Number: 801-376-7218</h4>

				<a target='_blank' href='https://www.instagram.com/weezer.and.its.weezy/'>
					<img src={insta} alt='Instagram' height='50' />
				</a>

				<a target='_blank' href='https://www.linkedin.com/in/jacob-mosteller-58419717b/'>
					<img src={linky} alt='Linkedin' height='50' />
				</a>

				<a target='_blank' href='https://github.com/JacobMosteller'>
					<img src={githuby} alt='Github' height='50' />
				</a>
			</div>
		)
	}
}
