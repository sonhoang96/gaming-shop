import React from 'react';
import FounderInfo from "../Component/About/FounderInfo.js";
import FounderDetailInfo from "../Component/About/FounderDetailInfo.js";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom"
export default class URL_Router extends React.Component {
	render() {
		console.log(this.props)
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<FounderInfo 
				          	firstName={this.props[0]} 
				          	secondName={this.props[1]} 
				          	thirdName={this.props[2]}
				          	portrait_first = "https://i.pinimg.com/originals/ad/8e/d9/ad8ed912559b9ee563fc2a1bf49dba7a.jpg"
				          	portrait_second = "https://i.pinimg.com/originals/81/71/a6/8171a6f0d1476a7a43f8a72791ad7cbd.jpg"
				          	portrait_third = "https://i.pinimg.com/originals/cd/51/80/cd51804b1fd1a97cc4430000a27db05f.jpg"
				        />
					</Route>
					<Route exact path="/:founder-:image.html" 
						render={({ match }) => <FounderDetailInfo match={match} />}
					/>
				</Switch>
			</Router>
		)
	}
}