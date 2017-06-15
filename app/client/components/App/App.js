import React from 'react';
import { Link, Fragment } from 'redux-little-router';

import ContainerExample from '../../containers/ContainerExample/ContainerExample';

class App extends React.Component {

	render() {
		return (
			<div>
				<h1>React Boilerplate</h1>
				<Link href="/container">Click here to go to the example container</Link>
				<Fragment forRoute="/container"><ContainerExample/></Fragment>
			</div>
		);
	}
}

export default App;
