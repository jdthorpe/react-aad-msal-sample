# demo of the `react-aad-msal` bug in chrome

A stripped down version of the official [typescript sample](https://github.com/syncweek-react-aad/react-aad/tree/master/samples/react-typescript)
for the purpose of illustrating a bug when this [react-aad](https://github.com/syncweek-react-aad/react-aad) 
is used with the redirect option in Chrome.

## usage

1. set up an Azure AD app registration according two [these instructions]()
    and be sure to enable Access Tokens and ID tokens in the Authentication
    section.
2. Clone this repo and update [these two lines](https://github.com/jdthorpe/react-aad-msal-sample/blob/master/src/authProvider.ts#L23-L24)
    with the Tenant and Client for your app registration.
3. Initialize the repo (`yarn`) and start the demo app (`yarn start`)
4. Open the demo page in Chrome (`localhost:3000`), select the "Redirect" option and click the "Log in" button.  Log in with your credentials
5. Open the console (`CTRL + SHIFT + J`), and then click the `Get Access Token` button.
6. Watch the console, which will generate an error, and cause the page to refresh without acquiring the token.
7. Click the `Get Access Token` button again and this time the access token is properly acquired.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
