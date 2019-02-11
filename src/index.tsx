import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configuredStored from "./@redux/store";

import Application from "./containers/Application";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

const store = configuredStored();

const Root = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
