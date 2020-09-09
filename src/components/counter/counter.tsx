import * as React from "react";

export default class Counter extends React.Component {
	state = {
		count: 0
	};

	increment = () => {
		const num: number = this.state.count + 1;

		this.setState({
			count: num
		});
	};

	decrement = () => {
		this.setState({
			count: this.state.count - 1
		});
	};

	render() {
		const { count } = this.state;
		return (
			<div>
				<h2>{count}</h2>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
			</div>
		);
	}
}
