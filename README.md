This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Description
This is the frontend which relies on the serverless backend code for mangaging restaurant selling out food and making deliveries.
The big picture is for the admins side, restaurants can signup after we authenticate with them and make a contract, they then upload their menu for each day on the app,The rest of the work now is left for us to handle. Displaying and marketing the food item happens on the other end of the app where users can purchase foodstuff provided as the menu for that day by specific restaurant. Our delivery persons are responsible for delivering the product to the respective customer in the most efficient and relaible way possible. Also the subscribed restaurants are able to view their statistics and financial status on our app even though they automatically get their pay when the customer makes one.
## Dependencies
Most of the dependencies are in the package.json file. but however the big dependency is that of the api.
The api backend can be found here [restaurant-hook](https://github.com/fanyui/restaurant-hook)

## Usage
As at now, you can visit the app, login once you are logged in you will be able to create a restaurant. Notice that a restaurant object doesn't yet have an image. after creating the restaurant, click back on the all restaurant tab, you will find the created restaurant with the details you provided. when you click on the restaurant, you will be directed to where you can add a menu innitally you will see a zero. You can then create a menu this time around you will be allowed to add an image to a menu item and see it instantly when its done processing.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
