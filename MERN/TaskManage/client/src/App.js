import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Component imports
import NavBar from './components/NavBar';

// Load user action
import { loadUser } from './actions/authActions';

// Component screens
import Home from './components/screens/Home';
import TaskList from './components/screens/TaskList';
import Profile from './components/screens/Profile';
import Login from './components/screens/Login';
import Register from './components/screens/Register';

const App = ({ store }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [store]);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/tasks" component={TaskList} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
