import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<div><h1>Categories</h1></div>} />
        <Route path="*" element={<div><h1>Page not found!</h1></div>} />
      </Routes>
    </Router>
  );
}

export default App;
