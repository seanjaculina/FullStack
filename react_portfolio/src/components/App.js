import '../App.css';

// Component imports
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <>
      <NavBar />
      <Home />

      <Projects />

      <About />

      <Contact />
    </>
  );
}

export default App;
