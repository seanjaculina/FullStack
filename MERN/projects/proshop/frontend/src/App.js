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

const App = () => {
  return (
    // for client side routing from Link presses, etc.
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          {/* Optional ID in the params by using :id? mark */}
          <Route path="/cart/:id?" component={CartScreen} />
          {/* Will render the prodcut clicked on and then show all data about it in UII using match from HTML5 history API */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
