
## Brandon's ReadMe

This project was made with create react app.
* node version: 10.15.3 (use `nvm` for easy switching of node versions)
* yarn version: 1.13.0

To run this project:
1) `git clone git@github.com:cooperjbrandon/zyper-codechallenge.git`
2) `cd zyper-codechallenge`
3) `yarn install`
4) `yarn start`
5) navigate to `localhost:3000`. Play with that app.

To run tests:
1) Complete steps 1-4 above
2) In another terminal window (in the same directory), run `yarn run cypress open`
3) click on `main.spec.js` to run the test

Background:
I used `create-react-app` to quickly bootstrap a react application. UI framework is using Material-UI. I'm using `axios` to do network requests for a few reasons. First, a `404` response using `fetch` doesn't actually fail the `try` block, but using `axios` it does. Also, `fetch` requires doing `response.json()`, while axios does not. See [this article](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5) for long explanation. Lastly, the testing framework `cypress` makes mocking really easy, however it mocks `XMLHttpRequests`, which `axios` uses under the hood. cypress doesn't mock `fetch` easily.

I used `cypress` for tests because it's a super simple acceptance/integration testing frameworks that comes with a ton of apis and works right out of the box.

Things to improve:
* Beef up testing. For sake of time i only wrote a few tests. Possible tests to add:
	* Make sure submit button is disabled when loading results.
	* Test for a failure on the GET request
	* Test for hitting 202s and making sure the code keeps trying to refetch the results.
	* Testing for the checkbox
* Pull out all the API requests into it's own service
* If expanding this project, using react-router (or something similar) to add routing
* Better input of usernames, possibly using something like [this library](https://www.npmjs.com/package/material-ui-chip-input)
* Error boundaries in UI, so app doesn't crash completely on unforseen error


## DEFAULT README FROM CREATE REACT APP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
