import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "../context"; // import the context provider to give our app global state

// Component imports
import Navbar from "./layout/Navbar";
import Index from "./layout/Index";

class App extends Component {
  render() {
    return (
      // wrap the whole app AND ROUTER in the context provider we made - obvious! We need to pass global state to the whole app
      // this is just like redux when using the state at the app level
      <Provider>
        <Router>
          <>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
              </Switch>
            </div>
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
