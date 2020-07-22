import React from 'react';
import {Link} from "react-router-dom"
export default class FounderDetailInfo extends React.Component {
	constructor(props){
			super(props)
			this.OriginUrl = this.OriginUrl.bind(this);
			this.OriginName = this.OriginName.bind(this);
	}
	OriginUrl(link){
		return link
		.trim()
		.replace('', 'https://i.pinimg.com/originals/')
		.replace('-info','.jpg')
		.replace(/[-]/g,'/');
	}
	OriginName(name){
		return name.replace(/[_]/g, String.fromCharCode(160));
	}
	render() {
		return (
			<div className="card">
		        <div className="container-fluid">
		          <div className="row mt-5 mb-5 pt-5 pb-5 mr-3 ml-3">
		            <div className="col-7">
		              <img src={this.OriginUrl(this.props.match.params.image)} alt="" className="card-img-top founder-info" />
		            </div> {/* end col-7 */}
		            <div className="col-5">
		              <div className="card-body">
		                <h4 className="card-title text-capitalize display-4 font-weight-bold">{this.OriginName(this.props.match.params.founder)}</h4>
		                <p className="card-title text-capitalize font-weight-bold">introdution:</p>
		                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, praesentium quam quibusdam laboriosam, dolorum veniam reprehenderit cupiditate debitis, veritatis est ipsa dolor aspernatur pariatur animi ea quasi. Nulla, eveniet ipsa.</p>
		                <p className="card-title text-capitalize font-weight-bold mb-0">career:</p>
		                <ul className="list-group list-group-flush">
					        <li className="list-group-item">dolorum veniam reprehenderit</li>
					        <li className="list-group-item">nulla, eveniet ipsa.</li>
					        <li className="list-group-item">veritatis est ipsa dolor aspernatur pariatur</li>
					        <li className="list-group-item">magnam, praesentium quam quibusdam laboriosam</li>
					        <li className="list-group-item">lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
					    </ul>
		                <Link to="/" className="btn btn-outline-dark btn-block">Back</Link>
		              </div> {/* end card-body */}
		            </div> {/* end col-5 */}
		          </div> {/* end row */}
		        </div>
		    </div>	
      )
	}
}