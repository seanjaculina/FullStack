import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // client side routing
import './index.css';

// React bootstrap styles
import { Container } from 'react-bootstrap';

// components (default exported so no need to extract using {} of course)
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/screens/HomeScreen';
import ProductScreen from './components/screens/ProductScreen';
import CartScreen from './components/screens/CartScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ProfileScreen from './components/screens/ProfileScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          {/* Optional ID in the params by using :id? mark */}
          <Route path="/cart/:id?" component={CartScreen} />
          {/* Will render the prodcut clicked on and then show all data about it in UII using match from HTML5 history API */}
          <Route exact path="/" component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
