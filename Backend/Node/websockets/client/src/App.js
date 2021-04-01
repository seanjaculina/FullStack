import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './components/SignIn/SignIn';
import Chat from './components/Chat/Chat';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/chat" component={Chat} />
      <Route path="/*" component={SignIn} />{' '}
      {/* Any other 'routes' should go home */}
    </Switch>
  </Router>
);

export default App;
