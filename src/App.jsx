import Navbar from './components/Navbar';
import Home from './home';
import About from './about';
import Features from './features';
import Services from './services';
import Gallery from './gallery';
import Testimonials from './testominals';
import Contact from './contact';
import Footer from './footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
