import React, { useState } from "react";
// import { app_state } from "./store/reducer"
// import { connect } from 'react-redux'


import "./App.css";
import { SampleBox } from "./SampleBox";
import { authProvider } from "./authProvider";


import {
  AzureAD,
  AuthenticationState,
  IAzureADFunctionProps
} from "react-aad-msal";



const App = () => {

  const [sampleType, setSampleType] = useState("redirect");

  const handleClick = (sampleType: string) => {
    setSampleType(sampleType);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to the react-aad-msal sample</h1>
      </header>

      <AzureAD provider={authProvider} >
        {({
          accountInfo,
          authenticationState,
          error
        }: IAzureADFunctionProps) => {
          return (
            <React.Fragment>


              {authenticationState === AuthenticationState.Unauthenticated && (
                <div>
                  <button
                    onClick={() => handleClick("popup")}
                    className="Button"
                  >
                    Popup Sample
                  </button>{" "}
                  <button
                    onClick={() => handleClick("redirect")}
                    className="Button"
                  >
                    Redirect Sample
                  </button>
                </div>
              )}


              <div className="SampleContainer">
                <SampleBox sampleType={sampleType} />
                <div className="SampleBox">
                  <h2 className="SampleHeader">Authenticated Values</h2>
                  <p>
                    When logged in, this box will show your tokens and user info
                  </p>
                  {accountInfo && (
                    <div style={{ wordWrap: "break-word" }}>
                      <p>
                        <span style={{ fontWeight: "bold" }}>ID Token:</span>{" "}
                        {accountInfo.jwtIdToken}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>Username:</span>{" "}
                        {accountInfo.account.userName}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>
                          Access Token:
                        </span>{" "}
                        {accountInfo.jwtAccessToken}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
                        {accountInfo.account.name}
                      </p>
                    </div>
                  )}
                </div>
                <div className="SampleBox">
                  <h2 className="SampleHeader">Errors</h2>
                  <p>
                    If authentication fails, this box will have the errors that
                    occurred
                  </p>
                  {error && (
                    <div style={{ wordWrap: "break-word" }}>
                      <p>
                        <span style={{ fontWeight: "bold" }}>errorCode:</span>{" "}
                        {error.errorCode}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>
                          errorMessage:
                        </span>{" "}
                        {error.errorMessage}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </AzureAD>
    </div>
  );
};

export default App;

/*

interface PROPS {
  user?: string
}

function App(props: PROPS) {
  return (
    <div className="App">
      <p>
        {props.user ? `User Name: ${props.user}` : null}
      </p>
      <p>
        {props.user ? (<div><a href={}>log out</a></div>) : (<div><a href={}>log in</a></div>)}
      </p>
    </div>
  );
}

const mapStateToProps = (state: app_state): { user?: string } => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);


*/