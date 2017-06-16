# react-boilerplate
React boilerplate. Uses webpack. Redux installed.

After running npm install you can start the app by running 'npm run start' with the command line on the root folder.

## Installed packages

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
 client/
  actions/
   index.js
  assets/
   img
  components/
   App/
    App.js
   RouteWithSubRoutes/
    RouteWithSubRoutes.js
  containers
   ExampleContainer/
    ExampleContainer.js
    ExampleContainer.spec.js
    ExampleContainer.css
  reducers/
   index.js
  index.html
  index.js
  routes.js
.babelrc
package.json
README.md
webpack.config.js

```

## Testing

We are using Jest for unit testing. Jest is a Node-based test runner, it is intended to be used for unit tests of your logic and your components.

Read about how it works and how to use it here: 
http://facebook.github.io/jest/

We also use Enzyme, which is "a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output." 

Here you can find how to use it:
http://airbnb.io/enzyme/

Tests are created inside the component's folder and their name should follow this structure: _[Component name].spec.js_

