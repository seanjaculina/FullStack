import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div className="home_container">
      <h1>Welcome to CoinSight</h1>
      <p>Crypto Currency Analytics at your fingertips</p>
      <Link to="/coindetails" className="start-btn">
        Click here to get tracking
      </Link>
    </div>
  );
};

export default Home;
