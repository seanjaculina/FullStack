import React from 'react'
import './index.css';

// React bootstrap styles
import {Container} from 'react-bootstrap';

// components (default exported so no need to extract using {} of course)
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      {/* As we know bootstrap classes are aliased. py-3 means padding-y 3px */}
      <main className="py-3">
        <Container>
          <h1>Hello</h1>
        </Container>
      </main>
    <Footer/>
    </>
  )
}

export default App;
