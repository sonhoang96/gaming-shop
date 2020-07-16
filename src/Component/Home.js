import React from 'react'
import "../Styles/home.css";
export default class Home extends React.Component {
	render() {
		return (
			<div className="vid">
		        <video autoPlay loop id="myVideo">
		          <source src="vid/intro-gaming.mp4" type="video/mp4" />
		        </video>
		        {/* Optional: some overlay text to describe the video */}
		        <div className="content">
		          <h1 className="text-capitalize">Intro new games</h1>
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perferendis illum, ut, dolor quod repellendus rem atque at earum esse distinctio a quisquam quam iure nesciunt similique cupiditate velit nobis!</p>
		          {/* Use a button to pause/play the video with JavaScript */}
		          <button className="btn btn-outline-dark" id="myBtn">Pause</button>
		        </div>
	      	</div>
		)
	}
}