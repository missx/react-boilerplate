import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContainerExampleStyle';

class ContainerExample extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={styles.align}>
				<h1>{this.props.text}</h1>
			</div>
		);
	}
}

ContainerExample.propTypes = {
	text: PropTypes.string.isRequired
}

export default ContainerExample;