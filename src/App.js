import Navigbar from './Components/NavBar/Navbar/navigbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/NavBar/HomePage/HomePage';
import Footer from './Components/NavBar/Navbar/Footer';
import Contact from './Components/ContactUS/Contact';
import About from './Components/About/About';
import ScrollToTop from './Components/NavBar/Navbar/ScrollToTop';
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navigbar />
        <HomePage path="/" component={HomePage} exact />
        <Contact path="/contact" component={Contact} />
        <About path="/about" component={About} />

        <Footer />
      </Router>


    </>

  );
}

export default App;
