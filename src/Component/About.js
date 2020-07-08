import React from 'react';
import FounderInfo from "./FounderInfo.js";
import "../Style/about.css";

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
		          	firstName={"Name Founder"} 
		          	secondName={"Name Founder"} 
		          	thirdName={"Name Founder"}
		          	portrait_first={"portrait-1.jpg"}
		          	portrait_second={"portrait-2.jpg"}
		          	portrait_third={"portrait-3.jpg"}
		          />
		        </div>
		    </div>
		)
	}
}