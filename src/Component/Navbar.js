import React from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {
	render() {
		return (
			<header id="nav-bar">
		        <nav className="bar">
		          <a className="navbar-brand" href="#!">Menu</a>
		          <ul className="navbar-nav list-menu">
		            <li className="nav-item active" id="about">
		            	<Link to="/about" className="nav-link">About</Link>
		            </li>
		            <li className="nav-item list-news" id="news">
		            	<Link to="/news" className="nav-link">News</Link>
		            </li>
		            	<ul className="navbar-nav list-news-menu">
		            		<li className="nav-item"><Link to="/news/game" className="nav-link">Games</Link></li>
		            		<li className="nav-item"><a href="#!" className="nav-link">Products</a></li>
		            		<li className="nav-item"><a href="#!" className="nav-link">Others</a></li>
		            	</ul>
		            <li className="nav-item" id="items"><a href="#!" className="nav-link">Items</a></li>
		            <li className="nav-item" id="contact"><a href="#!" className="nav-link">Contact</a></li>
		          </ul>
		        </nav>
		        <button className="toggle" type="button">
		          <i className="fas fa-bars" />
		        </button>
		    </header>
		)
	}
}