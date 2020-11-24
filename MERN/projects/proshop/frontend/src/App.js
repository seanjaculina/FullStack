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

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          {/* Will render the prodct clicked on and then show all data about it in UII using match from HTML5 history API */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
