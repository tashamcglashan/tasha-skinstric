import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import StartAnalysis from './pages/StartAnalysis.jsx';
import Result from "./pages/Result.jsx";
import PreparingPage from './pages/PreparingPage.jsx';
import Analysis from './pages/Analysis.jsx';
import Demographics from './pages/Demographics.jsx';
import TakePicture from './components/TakePicture.jsx';
import LoadingPage from './components/LoadingPage.jsx';






// Wrapper to conditionally render Nav
const AppLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  const hideNavOn = ['/demographics', '/analysis', '/result']; // Add other pages here as needed

  const shouldShowNav = !hideNavOn.includes(location.pathname);

  return (
    <>
      {shouldShowNav && <Nav />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/start-analysis" element={<StartAnalysis />} />
        <Route path="/result" element={<Result />} />
        <Route path="/preparing" element={<PreparingPage />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/demographics" element={<Demographics />} />
        <Route path="/take-picture" element={<TakePicture />} />
        <Route path="/loading" element={<LoadingPage />} />
        

      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
