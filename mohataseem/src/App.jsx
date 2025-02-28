import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Photosec from './sections/photosec/photosec';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

// mohataseem khan
function App() {
  return (
    <>
      <Photosec/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
