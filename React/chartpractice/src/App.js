import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Component imports
import Home from './screens/Home/Home';
import CoinDetails from './screens/Coins/CoinDetails';
import CoinDetail from './screens/Coins/CoinDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/coindetails" component={CoinDetails} />
        <Route path="/coin/:id" component={CoinDetail} />
      </Switch>
    </Router>
  );
};

export default App;
