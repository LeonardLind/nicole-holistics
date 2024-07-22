import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/home'; 
import About from './pages/about'; 
import Books from './pages/books'; 
import Services from './pages/services'; 
import Contact from './pages/contact'; 


const App = () => {
  return (
    <Router basename='/nicole-holistics/'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
	  <Footer />
    </Router>
  );
};

export default App;
