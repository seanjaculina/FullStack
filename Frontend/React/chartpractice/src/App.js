import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Component imports
import Home from './components/screens/Home/Home';
import CoinDetails from './components/screens/Coins/CoinDetails';
import CoinDetail from './components/screens/Coins/CoinDetail';

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
