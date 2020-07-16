import React from 'react';
import FounderInfo from "./FounderInfo.js";
import "../Styles/about.css";

export default class About extends React.Component {
	render() {
		return (
			<div className="bg-dark about" id="about">
		        <div className="container">
		          <div className="row pt-5 pb-4">
		            <div className="col-12">
		              <h2 className="display-4 text-capitalize title">About this page</h2>
		              <ul className="list-param">
		                <li className="text-justify pt-2 pb-2 text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, unde, consectetur quis harum modi iusto doloribus est sint aliquam aliquid, eaque. Facilis dolorum et, nesciunt quam praesentium repellat deleniti modi.</li>
		                <li className="text-justify pt-2 pb-2 text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita consequuntur in dolorum accusamus, quaerat iusto at neque labore asperiores similique aliquid ea officia, provident consectetur sapiente, cupiditate, vero dignissimos saepe.</li>
		                <li className="text-justify pt-2 pb-2 text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fugiat aspernatur molestiae dicta, aut, tenetur possimus ipsam, perspiciatis excepturi unde deleniti fugit repudiandae rerum et doloribus natus dolor accusantium nesciunt.</li>
		                <li className="text-justify pt-2 pb-2 text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum magnam sunt, cupiditate provident, neque eius iste dolorem laudantium temporibus ad, aliquid assumenda eos ipsa aspernatur vel tempore dolores! Eum, reprehenderit.</li>
		              </ul>
		            </div>
		          </div>
		          <FounderInfo 
		          	firstName={"Christina Costanza"} 
		          	secondName={"Jason Mraz"} 
		          	thirdName={"Paul George"}
		          	portrait_first = "https://i.pinimg.com/originals/ad/8e/d9/ad8ed912559b9ee563fc2a1bf49dba7a.jpg"
		          	portrait_second = "https://i.pinimg.com/originals/81/71/a6/8171a6f0d1476a7a43f8a72791ad7cbd.jpg"
		          	portrait_third = "https://i.pinimg.com/originals/cd/51/80/cd51804b1fd1a97cc4430000a27db05f.jpg"
		          />
		        </div>
		    </div>
		)
	}
}