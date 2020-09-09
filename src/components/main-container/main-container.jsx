import React, { Component } from "react";
import Counter from "../counter/counter";

class MainContainer extends Component {
	render() {
		return (
			<div>
				<h1>Top Header</h1>
				<div>
					<Counter />
				</div>
			</div>
		);
	}
}

MainContainer.propTypes = {};

export default MainContainer;
