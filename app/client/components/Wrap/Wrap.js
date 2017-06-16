import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'redux-little-router';
import { PropTypes } from 'prop-types';

export default store => Root =>
    <Provider store={store}>
        <RouterProvider store={store}>
            <Root />
        </RouterProvider>
    </Provider>;


