import React from 'react';
import {Link} from "react-router-dom";

export default class FounderInfo extends React.Component {
	constructor(props){
		super(props)
		this.changeToSlug = this.changeToSlug.bind(this);
		this.changeUrlImage = this.changeUrlImage.bind(this);
	}
	changeToSlug(slug){
		return slug
        .toLowerCase()
        .trim()
        .replace(/ /g,'_')
        .replace(/[^\w-]+/g,'');
	}
	changeUrlImage(link){
		return link
		.trim()
		.replace('https://i.pinimg.com/originals/', '')
		.replace('.jpg','-info')
		.replace(/[/]/g,'-')
	}
	render() {
		return (
			<div className="row pb-5">
				<div className="col-12">
					<h2 className="display-4 text-capitalize title text-center">Founders</h2>
				</div>
	            <div className="col-4 text-center text-dark">
	              <img src={this.props.portrait_first} alt="portrait" className="img-fluid mt-4 mb-4 border border-dark rounded-circle portrait-height" />
	              <h2>{this.props.firstName}</h2>
	              <p className="text-justify text-gray-dark mt-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt harum molestias eum, est, libero commodi beatae, tempore accusantium adipisci nesciunt velit.</p>
	              <p>
	                <Link to={'/about/' + this.changeToSlug(this.props.firstName) + '-' + this.changeUrlImage(this.props.portrait_first) + '.html'} className="btn btn-outline-dark btn-block">View Detail</Link>
	              </p>
	            </div>
	            <div className="col-4 text-center text-dark">
	              <img src={this.props.portrait_second} alt="portrait" className="img-fluid mt-4 mb-4 border border-dark rounded-circle portrait-height" />
	              <h2>{this.props.secondName}</h2>
	              <p className="text-justify text-gray-dark mt-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt harum molestias eum, est, libero commodi beatae, tempore accusantium adipisci nesciunt velit.</p>
	              <p>
	                <Link to={'/about/' + this.changeToSlug(this.props.secondName) + '-' + this.changeUrlImage(this.props.portrait_second) + '.html'} className="btn btn-outline-dark btn-block">View Detail</Link>
	              </p>
	            </div>
	            <div className="col-4 text-center text-dark">
	              <img src={this.props.portrait_third} alt="portrait" className="img-fluid mt-4 mb-4 border border-dark rounded-circle portrait-height" />
	              <h2>{this.props.thirdName}</h2>
	              <p className="text-justify text-gray-dark mt-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt harum molestias eum, est, libero commodi beatae, tempore accusantium adipisci nesciunt velit.</p>
	              <p>
	                <Link to={'/about/' + this.changeToSlug(this.props.thirdName) + '-' + this.changeUrlImage(this.props.portrait_third) + '.html'} className="btn btn-outline-dark btn-block">View Detail</Link>
	              </p>
	            </div>
      		</div>
		)
	}
}