import React from 'react';
// import {
// 	BrowserRouter as Route,
// 	Link
// } from "react-router-dom";

export default class Header extends React.Component {
	render() {
		return (
			<div id="nav-bar">
		        <nav className="bar">
		          <a className="navbar-brand" href="#!">Menu</a>
		          <ul className="navbar-nav list-menu">
		            <li className="nav-item active"><a href="#!" className="nav-link">Home</a></li>
		            <li className="nav-item"><a href="#!" className="nav-link">About</a></li>
		            <li className="nav-item"><a href="#!" className="nav-link">News</a></li>
		            <li className="nav-item "><a href="#!" className="nav-link">Items</a></li>
		            <li className="nav-item"><a href="#!" className="nav-link">Contact</a></li>
		          </ul>
		        </nav>
		        <button className="toggle" type="button">
		          <i className="fas fa-bars" />
		        </button>
		    </div>
		)
	}
}