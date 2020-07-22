import React from 'react'

export default class FounderTalk extends React.Component {
	render() {
		return (
			<div className="container">
			  <div className="row mt-5 mb-5 pt-3 pb-3">
			    <div className="col-8 text-light founder-talk-1">
			      <h2>Founder talk</h2>
			      <blockquote className="blockquote mb-0">
			        <p className="text-justify">Debitis nisl mi nullam luctus fames, distinctio pellentesque posuere possimus litora! Vehicula, culpa ultricies laoreet consequatur eveniet, illum aspernatur elementum culpa lobortis impedit minus, a provident illum! Perspiciatis odit nisi dicta officiis aptent urna magna aptent, culpa posuere elit eum, dis occaecati, litora asperiores provident cursus repellat. Beatae? Facere minus suscipit necessitatibus molestie porta deserunt fuga impedit taciti!</p>
			        <footer className="blockquote-footer text-light">{this.props.firstFounder}, <cite title="Founder/CEO">Founder/CEO</cite></footer>
			      </blockquote>
			    </div>
			    <div className="col-4">
			      <img src="images/portrait/portrait-4.jpg" alt="portrait" className="img-fluid founder-portrait-right" />
			    </div>
			  </div> {/* end row */}
			  <div className="row mt-5 mb-5 pt-3 pb-3">
			    <div className="col-4">
			      <img src="images/portrait/portrait-2.jpg" alt="portrait" className="img-fluid founder-portrait-left" />
			    </div>
			    <div className="col-8 text-light founder-talk-2">
			      <h2>Founder talk</h2>
			      <blockquote className="blockquote mb-0">
			        <p className="text-justify">Debitis nisl mi nullam luctus fames, distinctio pellentesque posuere possimus litora! Vehicula, culpa ultricies laoreet consequatur eveniet, illum aspernatur elementum culpa lobortis impedit minus, a provident illum! Perspiciatis odit nisi dicta officiis aptent urna magna aptent, culpa posuere elit eum, dis occaecati, litora asperiores provident cursus repellat. Beatae? Facere minus suscipit necessitatibus molestie porta deserunt fuga impedit taciti!</p>
			        <footer className="blockquote-footer text-light">{this.props.secondFounder}, <cite title="Founder/CEO">Founder/COO</cite></footer>
			      </blockquote>
			    </div>
			  </div> {/* end row */}
			  <div className="row mt-5 mb-5 pt-3 pb-3">
			    <div className="col-8 text-light founder-talk-3">
			      <h2>Founder talk</h2>
			      <blockquote className="blockquote mb-0">
			        <p className="text-justify">Debitis nisl mi nullam luctus fames, distinctio pellentesque posuere possimus litora! Vehicula, culpa ultricies laoreet consequatur eveniet, illum aspernatur elementum culpa lobortis impedit minus, a provident illum! Perspiciatis odit nisi dicta officiis aptent urna magna aptent, culpa posuere elit eum, dis occaecati, litora asperiores provident cursus repellat. Beatae? Facere minus suscipit necessitatibus molestie porta deserunt fuga impedit taciti!</p>
			        <footer className="blockquote-footer text-light">{this.props.thirdFounder}, <cite title="Founder/CEO">Founder/CC0</cite></footer>
			      </blockquote>
			    </div>
			    <div className="col-4">
			      <img src="images/portrait/portrait-5.jpg" alt="portrait" className="img-fluid founder-portrait-right" />
			    </div>
			  </div> {/* end row */}
			</div>
		)
	}
}