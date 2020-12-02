import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserContainer from './UsersContainer';
import Posts from './Posts';
import Todos from './Todos';

const App = () => {
  return (
    // using react router to render only componnets on the screen that we wish to see
    <Router>
      <Switch>
        <Route exact path="/" component={UserContainer} />
        <Route exact path="/posts/:id" component={Posts} />
        <Route exact path="/todos/:id" component={Todos} />
      </Switch>
    </Router>
  );
};

export default App;
