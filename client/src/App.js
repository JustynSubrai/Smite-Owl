import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
