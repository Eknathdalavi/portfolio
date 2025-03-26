import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';// Import BrowserRouter, Route, and Routes
import Navbar from './componants/Navbar';
import About from './componants/About';
import Project from './componants/Poject';
import Contact from './componants/Contact';
import Home from './componants/Home';
import Footer from './componants/Footer';
import Technologies from './componants/Technologies';

// import './App.css';

function App() {
  return (
    <Router> {/* Wrap your entire app in Router */}
      <div>
        <Navbar />
        <Routes> {/* Define your routes inside Routes */}
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
