# Checkout page challenge
This coding exercise is utilising Google Places and Map APIs to show the direction from current position to your entered destination. Also it used firebase auth service to signup and authorise the users, as well as firebase function as backend server.

Hence, you need to create a firebase project and a valid API key from GCP to user those API for development and , as well as installing the firebase CLI for deploy the host 

Therefore you need to save the `apiKey.sample.json` as `apiKey.json` inside `src/` folder and put your API key inside the file `apiKey.json`.

This exercise consist of 2 main part:
- Firebase functions as the backend server

This serverless function to handle the required REST requests, it is mainly from client.

 - SPA Progressive Web Application as the client

This client part was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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


# Run App locally using firebase 
Assume you have firebase cli installed, or install it following this [Link](https://firebase.google.com/docs/cli)

Then to run the app locally using below command:
```
firebase serve --only hosting,functions
```

To deploy new changes in SPA client to firebase hosting use following command:

```bash
# first login 
firebase login
# then build the SPA client
npm run build
# after login deploy
firebase deploy --only hosting
```

To deploy new changes in firebase function use following command:
```bash
# after login deploy
firebase deploy --only functions
```
Run the function test after deploying, run below command inside directory `functions/`
```
npm run e2e:test
```

# Login user
```
fiona.lin1001@gmail.com -- abc123 -- admin user
qubonnybac4423@yopmail.com -- qwe123 -- read only user
```
