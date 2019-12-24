import React from "react"
import "./App.css"
import Home from "../src/Components/Home/Home"
import Dash from "../src/Components/Dash/Dash"
import Skills from "../src/Components/Skills/Skills"
import About from "../src/Components/About/About"
import Contact from "../src/Components/Contact/Contact"
import Experience from "../src/Components/Experience/Experience"
import Projects from "../src/Components/Projects/Projects"
import { importDefaultSpecifier } from "@babel/types"

function App() {
	return (
		<div className='App'>
			<Home />
			<Dash />
			<Experience />
			<Skills />
			<About />
			<Projects />
			<Contact />
		</div>
		// <div class='grid-container'>
		// 	<header class='header'></header>
		// 	<aside class='sidenav'>
		// 		<Dash />
		// 	</aside>
		// 	<main class='main'>
		// 		<Experience />
		// 		<Skills />
		// 		<About />
		// 		<Projects />
		// 	</main>
		// 	<footer class='footer'>
		// 		<Contact />
		// 	</footer>
		// </div>
	)
}

export default App
