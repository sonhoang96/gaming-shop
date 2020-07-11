import React from 'react';
import About from "../Component/About.js";
import {
	BrowserRouter as Route,
	Switch
} from "react-router-dom"

export default class URL_Router extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/">
					<About/>
				</Route>
			</Switch>
		)
	}
}