import React from 'react';
import '../Style/navbar.css';
export default class Carousel extends React.Component {
	render() {
		return (
			<div className="carousel-inner">
		      <div className="carousel-item active">
		        <img src="images/wd.jpg" className="d-block w-100" alt="..." />
		        <div className="carousel-caption d-none d-md-block">
		          <h5>Watch Dog</h5>
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic accusamus placeat necessitatibus, facilis corrupti nemo sit aliquam commodi, libero doloremque harum at maxime, obcaecati modi voluptate tenetur saepe recusandae quas.</p>
		        </div>
		      </div>
		      <div className="carousel-item">
		        <img src="images/gta.jpg" className="d-block w-100" alt="..." />
		        <div className="carousel-caption d-none d-md-block">
		          <h5>Grand Thief Auto 5</h5>
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore doloribus animi omnis! Eos doloremque reprehenderit, magni facilis quo molestiae nulla dolorem aliquid ipsum explicabo unde cum repellat adipisci culpa, accusantium.</p>
		        </div>
		      </div>
		      <div className="carousel-item">
		        <img src="images/tlou.jpg" className="d-block w-100" alt="..." />
		        <div className="carousel-caption d-none d-md-block">
		          <h5>The Last Of Us</h5>
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eligendi molestias sequi cumque ullam optio soluta quo doloribus, esse asperiores voluptatum, debitis totam fugit, magnam porro vero dolores dolorum rem.</p>
		        </div>
		      </div>
		      <div className="carousel-item">
		        <img src="images/dmc.jpg" className="d-block w-100" alt="..." />
		        <div className="carousel-caption d-none d-md-block">
		          <h5>Devil May Cry 5</h5>
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eligendi molestias sequi cumque ullam optio soluta quo doloribus, esse asperiores voluptatum, debitis totam fugit, magnam porro vero dolores dolorum rem.</p>
		        </div>
		      </div>
		      <div className="carousel-item">
		        <img src="images/ac.jpg" className="d-block w-100" alt="..." />
		        <div className="carousel-caption d-none d-md-block">
		          <h5>Assassin Creed Unity</h5>
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eligendi molestias sequi cumque ullam optio soluta quo doloribus, esse asperiores voluptatum, debitis totam fugit, magnam porro vero dolores dolorum rem.</p>
		        </div>
		      </div>
		    </div>
		)
	}
}