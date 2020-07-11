import React from 'react';
import {Link} from "react-router-dom";

export default class FounderInfo extends React.Component {
	constructor(props){
		super(props)
		this.changeToSlug = this.changeToSlug.bind(this);
	}
	changeToSlug(slug){
		return slug
        .toLowerCase()
        .trim()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'');
		}
	render() {
		return (
			<div className="row pb-5">
	            <div className="col-4 text-center text-light">
	              <img src={`images/portrait/`+ this.props.portrait_first} alt="portrait" className="img-fluid mt-4 mb-4 border border-dark rounded-circle portrait-height" />
	              <h2>{this.props.firstName}</h2>
	              <p className="text-justify text-gray-dark mt-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt harum molestias eum, est, libero commodi beatae, tempore accusantium adipisci nesciunt velit.</p>
	              <p>
	                <Link to={`/about/` + this.changeToSlug(this.props.firstName) + '-' + this.props.portrait_first + ".html"} className="btn btn-outline-light btn-block">View Detail</Link>
	              </p>
	            </div>
	            <div className="col-4 text-center text-light">
	              <img src={`images/portrait/`+ this.props.portrait_second} alt="portrait" className="img-fluid mt-4 mb-4 border border-dark rounded-circle portrait-height" />
	              <h2>{this.props.secondName}</h2>
	              <p className="text-justify text-gray-dark mt-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt harum molestias eum, est, libero commodi beatae, tempore accusantium adipisci nesciunt velit.</p>
	              <p>
	                <Link to={`/about/` + this.changeToSlug(this.props.secondName) + '-' + this.props.portrait_second + ".html"} className="btn btn-outline-light btn-block">View Detail</Link>
	              </p>
	            </div>
	            <div className="col-4 text-center text-light">
	              <img src={`images/portrait/`+ this.props.portrait_third} alt="portrait" className="img-fluid mt-4 mb-4 border border-dark rounded-circle portrait-height" />
	              <h2>{this.props.thirdName}</h2>
	              <p className="text-justify text-gray-dark mt-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt harum molestias eum, est, libero commodi beatae, tempore accusantium adipisci nesciunt velit.</p>
	              <p>
	                <Link to={`/about/` + this.changeToSlug(this.props.thirdName) + '-' + this.props.portrait_third + ".html"} className="btn btn-outline-light btn-block">View Detail</Link>
	              </p>
	            </div>
      		</div>
		)
	}
}