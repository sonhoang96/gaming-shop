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
		            	<Link to="/" className="nav-link">About</Link>
		            </li>
		            <li className="nav-item list-news" id="news">
		            	<Link to="/" className="nav-link">News</Link>
		            </li>
		            	<ul className="navbar-nav list-news-menu">
		            		<li className="nav-item"><Link to="/news/game" className="nav-link">Games</Link></li>
		            		<li className="nav-item"><a href="#!" className="nav-link">Products</a></li>
		            		<li className="nav-item"><a href="#!" className="nav-link">Others</a></li>
		            	</ul>
		            <li className="nav-item" id="items"><Link to="/" className="nav-link">Items</Link></li>
		            <li className="nav-item" id="contact"><Link to="/" className="nav-link">Contact</Link></li>
		          </ul>
		        </nav>
		        <button className="toggle" type="button">
		          <i className="fas fa-bars" />
		        </button>
		    </header>
		)
	}
}