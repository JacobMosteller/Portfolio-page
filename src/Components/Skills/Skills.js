import React, { Component } from "react"
import "./Skills.css"
import cssy from "./css.png"
import htmly from "./html.png"
import javy from "./javascript.png"
import nody from "./node.png"
import reacty from "./reactapp.png"

export default class Skills extends Component {
	render() {
		return (
			<div className='Skills'>
				<h1>
					<a name='Skills'>Skills</a>{" "}
				</h1>

				<ul>
					<li>
						<img src={javy} alt='Javascript' height='200' />
					</li>
					<li>
						<img src={htmly} alt='HTML' height='200' />
					</li>
					<li>
						<img src={cssy} alt='CSS' height='200' />
					</li>
					<li>
						<img src={nody} alt='Node' height='200' />
					</li>
					<li>
						<img src={reacty} alt='React' height='200' />
					</li>
				</ul>
			</div>
		)
	}
}
