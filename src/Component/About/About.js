import React from 'react';
import "../../Styles/about.css";
import FounderTalk from "./FounderTalk.js";
import URL_Router_About from "../../Router/URL_Router_About.js";

export default class About extends React.Component {
	render() {
		let listName = ['Christina Costanza','Jason Mraz','Paul George'];
		return (
			<div className="bg-light" id="about">
		        <div className="container">
		          <div className="row pt-5">
		            <div className="col-12">
		              <h2 className="display-4 text-capitalize title text-center">About this page</h2>
		              <ul className="list-param">
		                <li className="text-justify pt-2 pb-2 text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, unde, consectetur quis harum modi iusto doloribus est sint aliquam aliquid, eaque. Facilis dolorum et, nesciunt quam praesentium repellat deleniti modi.</li>
		                <li className="text-justify pt-2 pb-2 text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita consequuntur in dolorum accusamus, quaerat iusto at neque labore asperiores similique aliquid ea officia, provident consectetur sapiente, cupiditate, vero dignissimos saepe.</li>
		                <li className="text-justify pt-2 pb-2 text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fugiat aspernatur molestiae dicta, aut, tenetur possimus ipsam, perspiciatis excepturi unde deleniti fugit repudiandae rerum et doloribus natus dolor accusantium nesciunt.</li>
		                
		                <li className="text-justify pt-2 pb-2 text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum magnam sunt, cupiditate provident, neque eius iste dolorem laudantium temporibus ad, aliquid assumenda eos ipsa aspernatur vel tempore dolores! Eum, reprehenderit.</li>
		                <li className="text-justify pt-2 pb-2 text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum magnam sunt, cupiditate provident, neque eius iste dolorem laudantium temporibus ad, aliquid assumenda eos ipsa aspernatur vel tempore dolores! Eum, reprehenderit.</li>
		              </ul>
		            </div>
		          </div>
		          <URL_Router_About {...listName} />
		          <FounderTalk
		          	firstFounder={listName[0]} 
		          	secondFounder={listName[1]} 
		          	thirdFounder={listName[2]}
		          />
		        </div>
		    </div>
		)
	}
}