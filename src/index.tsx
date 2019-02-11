import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Application from "./containers/Application";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Application />, document.getElementById("root"));

serviceWorker.unregister();
