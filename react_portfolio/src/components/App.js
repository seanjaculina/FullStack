import '../App.css';

// Component imports
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Recommendations from './Recommendations';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Recommendations />
      <Contact />
    </>
  );
}

export default App;
