import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav__left">
                <span className="nav__logo">SKINSTRIC</span>
                <span className="nav__intro"> [ INTRO ]</span>
            
            </div>

            <div className="nav__right">
                <button className="nav__button">ENTER CODE</button>
                </div>
                </nav>
    );  
}