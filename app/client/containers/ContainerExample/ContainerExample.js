import React from 'react';
import { Fragment } from 'redux-little-router';

class ContainerExample extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="align">
				<h1>{this.props.text}</h1>
			</div>
		);
	}
}

export default ContainerExample;