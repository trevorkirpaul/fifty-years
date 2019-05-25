import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

import configuredStored from "./@redux/store";

import Application from "./containers/Application";

import * as serviceWorker from "./serviceWorker";

const store = configuredStored();

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  color: #383838;
  box-sizing: border-box;
}

body {
  color: #383838;
  background: #e8e8e8;
  font-family: "Roboto", sans-serif;
}
`;

const Root = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <Application />
      </Provider>
    </React.Fragment>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
