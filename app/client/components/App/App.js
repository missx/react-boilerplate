import React from 'react';
import { 
	BrowserRouter as Router, Route
} from 'react-router-dom';

import RouteWithSubRoutes from '../RouteWithSubRoutes/RouteWithSubRoutes';
import { routes } from '../../routes.js';

class App extends React.Component {

	render() {
		return (
			<Router>
				<div>
					{routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route}/>
					))}
				</div>
			</Router>
		);
	}
}

export default App;
