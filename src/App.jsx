import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ import routing tools

import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import StartAnalysis from './pages/StartAnalysis.jsx'; // ✅ import your page
import Result from "./pages/Result.jsx";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} /> {/* homepage */}
        <Route path="/start-analysis" element={<StartAnalysis />} /> {/* Take Test page */}
        <Route path="/result" element={<Result />} />

      </Routes>
    </Router>
  );
}

export default App;
