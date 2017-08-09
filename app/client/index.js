import React from 'react';
import ReactDOM from 'react-dom';
import { 
	combineReducers, 
	compose, 
	createStore, 
	applyMiddleware 
} from 'redux';
import { routerForBrowser } from 'redux-little-router';
import { Provider } from 'react-redux';

import { routes } from './routes.js';
import customReducer from './reducers/reducer';
import App from './components/App/App.js';

const {
	reducer,
	middleware,
	enhancer
} = routerForBrowser({
	// The configured routes. Required.
	routes
});

const store = createStore(
	combineReducers({ router: reducer, customReducer }),
	{},
	compose(enhancer, 
		applyMiddleware(middleware),
		window.devToolsExtension ?
			window.devToolsExtension() : f => f)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);