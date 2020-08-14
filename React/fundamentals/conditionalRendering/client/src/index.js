import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // or simply <> </>
  <Fragment>
    <App />
  </Fragment>,
  document.querySelector("#root")
);

serviceWorker.unregister();
