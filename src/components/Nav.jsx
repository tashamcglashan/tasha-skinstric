import React from 'react';
import './Nav.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const hideEntercode = ["/start-analysis", "/result", "/take-picture"];

  return (
    <nav className="nav">
      <div className="nav__left">
        <div className="nav__logo" onClick={() => navigate("/")}>
          SKINSTRIC
        </div>
        <span className="nav__intro">[ INTRO ]</span>
      </div>

      <div className="nav__right">
        {!hideEntercode.includes(location.pathname) && (
          <button className="nav__button">ENTER CODE</button>
        )}
      </div>
    </nav>
  );
}
