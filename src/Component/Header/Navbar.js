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
		            	<a href="#!" className="nav-link">About</a>
		            </li>
		            <li className="nav-item list-news" id="news">
		            	<a href="#!" className="nav-link">News</a>
		            </li>
		            	<ul className="navbar-nav list-news-menu">
		            		<li className="nav-item"><Link to="/news/games" className="nav-link">Games</Link></li>
		            		<li className="nav-item"><a href="/news/products" className="nav-link">Products</a></li>
		            		<li className="nav-item"><a href="/news/others" className="nav-link">Others</a></li>
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