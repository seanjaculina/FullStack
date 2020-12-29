import '../App.css';

// Component imports
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Testimonials from './Testimonials';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
