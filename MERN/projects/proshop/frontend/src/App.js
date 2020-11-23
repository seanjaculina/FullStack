import React from 'react'
import './index.css';

// React bootstrap styles
import {Container} from 'react-bootstrap';

// components (default exported so no need to extract using {} of course)
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
    <Footer/>
    </>
  )
}

export default App;
