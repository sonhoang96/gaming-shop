import React from 'react';
import About from "../Component/About.js";
import FounderDetailInfo from "../Component/FounderDetailInfo.js";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom"
export default class URL_Router extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<About/>
					</Route>
					<Route exact path="/about/:founder-:image.html" 
						render={({ match }) => <FounderDetailInfo match={match} />}
					/>
				</Switch>
			</Router>
		)
	}
}