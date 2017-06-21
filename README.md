# react-boilerplate

![React and Redux](https://janikvonrotz.ch/wp-content/uploads/2017/03/Redux-and-React.png)

React application boilerplate. Redux added to integrate with React. Uses webpack as a module bundler. Uses Jest and Enzyme for testing. 

## Table of Contents

* Dependencies
* App Structure
* Installation
* Running the App
* Other Commands
* Testing


## Dependencies

* **React** - https://facebook.github.io/react/
* **React-dom** - https://facebook.github.io/react/
* **Redux** - http://redux.js.org/
* **prop-types** - https://www.npmjs.com/package/prop-types
* **redux-little-router** - https://github.com/FormidableLabs/redux-little-router
* **Webpack** - https://webpack.js.org/
* **Babel** - https://babeljs.io/
  * **babel-core**
  * **babel-jest**
  * **babel-loader**
  * **babel-preset-es2015**
  * **babel-preset-react**
* **Jest** - http://facebook.github.io/jest/
* **react-test-renderer** - https://www.npmjs.com/package/react-test-renderer
* **Enzyme** - http://airbnb.io/enzyme/
  * **jest-enzyme** 
* **redux-mock-store** - https://www.npmjs.com/package/redux-mock-store


## App Structure

```

app/
|--client/
|   |--__test__/                                  * Tests folder
|   |   |--__snapshots__                          * Folder of snapshots created by Jest      
|   |   |--ExampleContainer.spec.js
|   |--actions/                                   * Redux actions
|   |   |--index.js
|   |--assets/
|   |   |--img/
|   |--components/                                * Dumb components
|   |   |--App/
|   |   |   |--App.js
|   |   |--RouteWithSubRoutes/
|   |       |--RouteWithSubRoutes.js
|   |--containers/                                * Smart components
|   |   |--ExampleContainer/                      * Each components is located in a folder 
|   |       |--ExampleContainer.js                  with its css file
|   |       |--ExampleContainer.css
|   |--reducers/                                  * Redux reducers folder
|   |   |--reducer.js
|   |--index.html
|   |--index.js
|   |--routes.js
|--dist/
|--node_modules/
|--.babelrc
|--.gitignore
|--package.json
|--README.md
|--webpack.config.js
|--webpack.dev.js
|--webpack.prod.js

```

*To understand what are smart and dumb components (or container and presentational components) you can refer to this article: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0


## Installation

* `fork` this repo
* `clone` your fork
* `npm install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies or `yarn`


## Running the App

`npm run start`

This command executes webpack-dev-server, which provides you with a server and live reloading. The app can be accessed on http://localhost:8080.


## Other Commands

`npm run build` Build files for development

`npm run build:prod` Build files for production

`npm run test` Run jest tests

`npm run test:watch` Run jest tests and while in watch mode


## Testing

We are using Jest for unit testing. Jest is a Node-based test runner, it is intended to be used for unit tests of your logic and your components.

Read about how it works and how to use it here: 
http://facebook.github.io/jest/

We also use Enzyme, which is "a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output." 

Here you can find how to use it:
http://airbnb.io/enzyme/

Tests are created inside the component's folder and their name should follow this structure: `[component-name].spec.js`

