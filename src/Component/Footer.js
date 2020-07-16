import React from 'react';
import "../Styles/footer.css"

export default class Footer extends React.Component {
	render() {
		return (
			<footer id="footer" className="footer">
			  <div className="container text-center">
			    <div className="row pt-4">
			      <div className="col-4">
			        <h3 className="text-capitalize font-weight-bold">contact us</h3>
			        <div className="phone">
			          <i className="fas fa-mobile-alt text-gray-dark" />
			          <p className="d-inline-block">+XX(07)12345698</p>
			        </div>
			        <div className="mail">
			          <i className="fas fa-mail-bulk" />
			          <p className="d-inline-block">contact_us@hotmail.mbs.com</p>
			        </div>
			        <div className="social-media">
			          <a href="#!">
			            <i className="fab fa-facebook" />
			          </a>
			          <a href="#!">
			            <i className="fab fa-instagram" />
			          </a>
			          <a href="#!">
			            <i className="fab fa-twitter" />
			          </a>
			          <a href="#!">
			            <i className="fab fa-whatsapp" />
			          </a>
			        </div>
			      </div>
			      <div className="col-4">
			        <h3 className="text-capitalize font-weight-bold">product</h3>
			        <ul className="list-unstyled">
			          <li><a href="#!">Game Online</a></li>
			          <li><a href="#!">Game Offline</a></li>
			          <li><a href="#!">Gaming Gear</a></li>
			          <li><a href="#!">Special Items</a></li>
			          <li><a href="#!">Others</a></li>
			        </ul>
			      </div>
			      <div className="col-4">
			        <h3 className="text-capitalize font-weight-bold">legal</h3>
			        <ul className="list-unstyled">
			          <li><a href="#!">Privacy Policy</a></li>
			          <li><a href="#!">Terms and Conditions</a></li>
			          <li><a href="#!">License</a></li>
			        </ul>
			      </div>
			      <div className="col-12">
			        <hr />
			        <div className="row pt-4">
			          <div className="col-6">
			            <p className="text-secondary text-capitalize text-left">Copyright © my website 2020</p>
			          </div>
			          <div className="col-6">
			            <p className="text-secondary text-capitalize text-right"><a href="#!">Privacy Policy</a> • <a href="#!">Terms and Conditions</a></p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</footer>
		)
	}
}