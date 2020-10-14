import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component imports
import Navbar from "./layout/Navbar";
import Index from "./layout/Index";

class App extends Component {
  render() {
    return (
      // remember: we want to wrap our whole app and children of it in browser router (Router as alias) to
      // provide routing to the whole app
      <Router>
        <>
          {/* Nav / common page elements should be above the switch container for surrounding our routes  */}
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
