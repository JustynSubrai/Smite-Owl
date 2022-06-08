import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Gods from './pages/Gods/Gods';
import Tier from './pages/Tier/Tier';
import Builds from './pages/Builds/Builds';
import Leaderboards from './pages/Leaderboards/Leaderboards';
import Notes from './pages/Notes/Notes';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Global from './pages/Global/Global';


function App() {
  return (
    <Router className="App">
        <Global />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gods" element={<Gods />} />
        <Route path="/tier" element={<Tier />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
